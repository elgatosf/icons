# Prepare the output directory.
rm -r ./src/react/icons ./src/react/.tmp
mkdir ./src/react/.tmp

#
# Converts all SVGs in the given source directory to React components.
# {param} Source of the SVGs to convert.
# {param} Character that represents the size of the icon, for example "s", "m", or "l".
#
convert () {
	source=$1
	shirtSize=$2

	# Convert the SVGs to React components.
	env ICON_SIZE=$shirtSize svgr $source \
		--config-file ./scripts/svgr/config.cjs \
		--index-template ./scripts/svgr/template-index.cjs \
		--template ./scripts/svgr/template-icon.cjs \
		--out-dir ./src/react/icons \
		--ignore-existing

	# Rename the index file so we can merge them later.
	indexSource="./src/react/icons/index.ts"
	indexDest="./src/react/.tmp/index-$shirtSize.ts"

	if [ -f $indexSource ]; then
		mv $indexSource $indexDest
	else 
		echo "" >> $indexDest
	fi

	# When the size isn't medium (default).
	if [ $shirtSize != "m" ]; then
		# Create a file that is just the JSX of the SVG.
		env ICON_SIZE=$shirtSize svgr $source \
			--config-file ./scripts/svgr/config.cjs \
			--index-template ./scripts/svgr/template-index.cjs \
			--template ./scripts/svgr/template-size.cjs \
			--out-dir ./src/react/.tmp/$shirtSize \
			--ignore-existing

		# Merge the size into the icon component.
		for filename in src/react/.tmp/$shirtSize/*.tsx; do
			jsx=`cat $filename`
			jsx=${jsx:0:-1} # Remove trailing semicolon.

			find="// case '$shirtSize':"
    		replace="case '$shirtSize':
        		return ($jsx)"
    		replace=$(sed -e 's/[&\\/]/\\&/g; s/$/\\/' -e '$s/\\$//' <<<"$replace")

    		sed -i -e "s|$find|$replace|g" src/react/icons/`basename $filename`
  		done
	fi
}

convert "./svg/24" "m" # default
convert "./svg/16" "s"
convert "./svg/32" "l"

# Merge the index files.
cat ./src/react/.tmp/index-s.ts ./src/react/.tmp/index-m.ts ./src/react/.tmp/index-l.ts | sort -u > ./src/react/icons/index.ts

# Remove temporary JSX sizes, and prettify the output.
rm -r ./src/react/.tmp
prettier ./src/react --write