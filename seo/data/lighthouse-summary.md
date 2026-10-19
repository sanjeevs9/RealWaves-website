# Lighthouse results (Lighthouse 12.8.2, simulated slow 4G phone / desktop preset)

Old build (= live site on 9 Oct 2026) vs new build, run on the same machine. Raw JSON is kept locally in seo/data/lighthouse/ (git-ignored, ~15 MB). Re-run: npx lighthouse@12.8.2 <url> --output=json, then python3 -I seo/tools/lh_summary.py.

```
run                          perf seo a11y bp  LCP      CLS    TBT     KB    failed SEO audits
after-about-desktop           100 100   96  96  0.8 s    0.001  0 ms      393 
after-about-mobile             94 100   91  96  3.1 s    0.001  10 ms     335 
after-blogpost-desktop        100 100   96  96  0.8 s    0      0 ms     1321 
after-blogpost-mobile          94 100   91  96  3.1 s    0      0 ms      519 
after-dcut-desktop            100 100   96  96  0.6 s    0      0 ms      445 
after-dcut-mobile              99 100   92  96  2.3 s    0      10 ms     651 
after-home-desktop             91 100   96  96  1.9 s    0      0 ms     1256 
after-home-mobile              78 100   92  96  4.5 s    0.138  10 ms    5137 
after-product-desktop         100 100   89  96  0.5 s    0      0 ms      475 
after-product-mobile           95 100   89  96  2.9 s    0      0 ms      679 
after-products-desktop        100 100   95  96  0.8 s    0      0 ms      642 
after-products-mobile          97 100   88  96  2.7 s    0      0 ms     1005 
before-about-desktop          100 100   96  96  0.7 s    0.001  0 ms      351 
before-about-mobile            93 100   91  96  3.2 s    0.001  10 ms     338 
before-blogpost-desktop       100 100   96  96  0.7 s    0      0 ms     1280 
before-blogpost-mobile         93 100   91  96  3.2 s    0      10 ms     530 
before-home-desktop            90 100   96  96  2.1 s    0      0 ms     9513 
before-home-mobile             67 100   92  96  9.9 s    0.155  30 ms    9948 
before-product-desktop        100 100   89  96  0.5 s    0      0 ms      399 
before-product-mobile          95 100   89  96  2.9 s    0      0 ms      670 
before-products-desktop       100 100   96  96  0.6 s    0      0 ms      516 
before-products-mobile         95 100   89  96  3.0 s    0      10 ms    1042 
```
