#!/bin/sh
# Runs Lighthouse (same settings as PageSpeed Insights) on the old and new builds.
# Usage: sh seo/tools/lighthouse.sh   (old build on :3124, new build on :3123)
OUT=seo/data/lighthouse
export CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
run() { # site port path name formfactor
  flags="--quiet --output=json --output-path=$OUT/$1-$4-$5.json --only-categories=performance,accessibility,best-practices,seo --chrome-flags=--headless=new"
  if [ "$5" = desktop ]; then flags="$flags --preset=desktop"; fi
  npx -y lighthouse@12.8.2 "http://localhost:$2$3" $flags || echo "failed $1 $4 $5"
}
for ff in mobile desktop; do
  run before 3124 / home $ff;            run after 3123 / home $ff
  run before 3124 /products products $ff; run after 3123 /products products $ff
  run before 3124 /products/laxmi-d-cut product $ff; run after 3123 /products/laxmi-d-cut product $ff
  run before 3124 /about about $ff;      run after 3123 /about about $ff
  run before 3124 /blogs/1 blogpost $ff; run after 3123 /blogs/custom-carry-bags-promote-your-business blogpost $ff
  run after 3123 /non-woven-bags/d-cut-bags dcut $ff
done
echo done
