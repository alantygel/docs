/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ee4bfa31faf06b40f271a80ba79f7ac8"
  },
  {
    "url": "assets/css/0.styles.06ce648d.css",
    "revision": "c86f50248a4757b5118443a2c8cd898f"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/box-shadow.20e92e12.png",
    "revision": "20e92e12c4326009549c8240d8aa4ab8"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/color_gradient.4086d2f4.png",
    "revision": "4086d2f4fabc3af84a1bbff297db08ef"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color-palette.bdece04a.png",
    "revision": "bdece04a56419be319439a05a83571e5"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/io.622a8677.png",
    "revision": "622a8677618d8982f3710b2fa27f508e"
  },
  {
    "url": "assets/img/media.d38f5d91.png",
    "revision": "d38f5d911b43bf5960d64528b49f43b0"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.1efb7349.png",
    "revision": "1efb7349c8490f21620a06fd53ae1c03"
  },
  {
    "url": "assets/js/10.f318c3b3.js",
    "revision": "3af10ffa7fd1e2bf8adf986b5ef6935e"
  },
  {
    "url": "assets/js/100.c8232e9c.js",
    "revision": "b64c7f4b3b5a378d5432e3a7fe48d957"
  },
  {
    "url": "assets/js/101.1622d9c6.js",
    "revision": "80f5ddc7ac3fd4f1ef6d88c97a1e24e6"
  },
  {
    "url": "assets/js/102.164a406c.js",
    "revision": "fc7b641ae7a7ae230f86b1224577437c"
  },
  {
    "url": "assets/js/103.9b470633.js",
    "revision": "610183458121a3a75d024276e81f85d1"
  },
  {
    "url": "assets/js/104.e5db9af4.js",
    "revision": "6baa65f72066978f0c38a4647a9ae023"
  },
  {
    "url": "assets/js/105.b7e71507.js",
    "revision": "5f283a309c9483f87d87cd7d3e021144"
  },
  {
    "url": "assets/js/106.3bea1ef7.js",
    "revision": "214b3f019c145dc5a8033fd5ad33c07b"
  },
  {
    "url": "assets/js/107.b3759a08.js",
    "revision": "4ecbd7032442bd304c426c65e57ab750"
  },
  {
    "url": "assets/js/108.f1add839.js",
    "revision": "c0c73c8c528c809558750fc48ed2df91"
  },
  {
    "url": "assets/js/109.4d3eea57.js",
    "revision": "89b0dc7417443ba729f77b8c4c72c922"
  },
  {
    "url": "assets/js/11.0ab06eda.js",
    "revision": "e62abfbe2cf457c846f1b5fd62288edb"
  },
  {
    "url": "assets/js/110.ac730fff.js",
    "revision": "06600dc25a506d7f5137ac73133edb74"
  },
  {
    "url": "assets/js/111.89da24ee.js",
    "revision": "032ecdb2cb16b8d90f52a0bfd22f4d6e"
  },
  {
    "url": "assets/js/12.be90618b.js",
    "revision": "4b2611fb5066a575fba192db3b854e91"
  },
  {
    "url": "assets/js/13.e9f1a084.js",
    "revision": "db75bbfa17e2821dca273534f30a1c31"
  },
  {
    "url": "assets/js/14.3a946d7d.js",
    "revision": "3242db9d039692f7b4b6791a8af62f99"
  },
  {
    "url": "assets/js/15.4a4995ac.js",
    "revision": "ad90b41913d137aab84b2cc95b29639a"
  },
  {
    "url": "assets/js/16.6eef81e7.js",
    "revision": "52efa01d8b228d083b99cc920dfe725f"
  },
  {
    "url": "assets/js/17.05865985.js",
    "revision": "8138ddaa0449771fd9d1e0230772165d"
  },
  {
    "url": "assets/js/18.e1dc97cf.js",
    "revision": "b1f3014bf1343dfcb39a6ebd4fe91210"
  },
  {
    "url": "assets/js/19.0579ef53.js",
    "revision": "c211c102a6d9487eb883d50223511b16"
  },
  {
    "url": "assets/js/20.3e73a4aa.js",
    "revision": "f6ffb1552a05c907e3eb71d4278e1182"
  },
  {
    "url": "assets/js/21.3d682652.js",
    "revision": "0dc4ae1eff78c776cefd4a12a11cbe97"
  },
  {
    "url": "assets/js/22.2887c912.js",
    "revision": "97fe66f70f1979584962b3a81bf89948"
  },
  {
    "url": "assets/js/23.f1bed90e.js",
    "revision": "254c0e85dc06a772304cff02a7e199da"
  },
  {
    "url": "assets/js/24.c988306e.js",
    "revision": "32be2d0e44e4fc441ba9767dc5f3e0ef"
  },
  {
    "url": "assets/js/25.c4a07428.js",
    "revision": "0c65ec6f56f3ad34834b1f1453fd1211"
  },
  {
    "url": "assets/js/26.87b79707.js",
    "revision": "b91a67925b52ff62c4613c5bc8b9f4bc"
  },
  {
    "url": "assets/js/27.79f80dd2.js",
    "revision": "042a22e20e9954f0b466c5e1ec381679"
  },
  {
    "url": "assets/js/28.7a49dfca.js",
    "revision": "d0b4e615d72ce334280c5153aa6ac2c9"
  },
  {
    "url": "assets/js/29.88cc7475.js",
    "revision": "9cb8401defaf7d694c7a9aa04163e5a3"
  },
  {
    "url": "assets/js/3.59e3e520.js",
    "revision": "0981d7870a780d9c6849a9170cadcbce"
  },
  {
    "url": "assets/js/30.7cc9b01d.js",
    "revision": "0ad8aee3acf4fdaba4c4475eadba60d5"
  },
  {
    "url": "assets/js/31.a857f46d.js",
    "revision": "3c663ac2ec10bb80bf91d13cd975ca73"
  },
  {
    "url": "assets/js/32.8bfa8fcc.js",
    "revision": "6fab7ce95d61f8754800e40ae9ec0b3a"
  },
  {
    "url": "assets/js/33.087e6ab4.js",
    "revision": "55dd29e37a3cf52e5b2c7c6e098ed004"
  },
  {
    "url": "assets/js/34.fa2165f7.js",
    "revision": "479d1fffb3fb207f93a4357da1ad8705"
  },
  {
    "url": "assets/js/35.6f599faf.js",
    "revision": "509f5335ddb4c15e91241dd79f523e25"
  },
  {
    "url": "assets/js/36.49e48455.js",
    "revision": "7ef355511db3bbeb259e1ed0033b9ce9"
  },
  {
    "url": "assets/js/37.43cb9d10.js",
    "revision": "4ef3ba0774fa5353f9715796d5524341"
  },
  {
    "url": "assets/js/38.e3e6b3c6.js",
    "revision": "dbac36777c07ebf64dec2b98679dd368"
  },
  {
    "url": "assets/js/39.3d5b2bc8.js",
    "revision": "bb99a426d1ff0f3b1172b36f4b7657eb"
  },
  {
    "url": "assets/js/4.f3cfa906.js",
    "revision": "e63f87e1a2465bde2aa85c0d88813d3d"
  },
  {
    "url": "assets/js/40.d6bfdde0.js",
    "revision": "9c92bf548a1fad262683738f67bb7b0f"
  },
  {
    "url": "assets/js/41.c8b15b6e.js",
    "revision": "0949645e7b2d2b8ca7c64980abbd887c"
  },
  {
    "url": "assets/js/42.480c7b57.js",
    "revision": "ef75710e8ae14833e43d28c41dad3ca0"
  },
  {
    "url": "assets/js/43.b3592f6f.js",
    "revision": "287de9835d26b7d08337b3fb6592050e"
  },
  {
    "url": "assets/js/44.24ab2db8.js",
    "revision": "e6e695c1b34f7bed4861eb681cdf757a"
  },
  {
    "url": "assets/js/45.32879ca2.js",
    "revision": "fd3e98e31e5c47019709a502400cd1ff"
  },
  {
    "url": "assets/js/46.90291194.js",
    "revision": "e911686af73aa2816a89c9b2496cd5a9"
  },
  {
    "url": "assets/js/47.e8983a3b.js",
    "revision": "bd9af2a3b3c4a4e1f62dc7954f074c15"
  },
  {
    "url": "assets/js/48.e75375c0.js",
    "revision": "50ff740189dc78e7c31d5d15d3646dac"
  },
  {
    "url": "assets/js/49.e229adb2.js",
    "revision": "918affe6957b9a20a4544ff564e96416"
  },
  {
    "url": "assets/js/5.16f1ccd8.js",
    "revision": "6eb8eb06c8180e3f5f9c4afe3f00db2f"
  },
  {
    "url": "assets/js/50.8a378116.js",
    "revision": "071e764ef8c79c5c8a9d15967529c4a0"
  },
  {
    "url": "assets/js/51.df5e18b8.js",
    "revision": "eeb14e4c65ced17012dc637526726115"
  },
  {
    "url": "assets/js/52.f85ed86b.js",
    "revision": "d3741ee9b8e7a21e5820d58045755d37"
  },
  {
    "url": "assets/js/53.9e510209.js",
    "revision": "269d90cebc303868f884e8d0e3e4639c"
  },
  {
    "url": "assets/js/54.f50acb47.js",
    "revision": "d77907a037607e951eae670fd86e8761"
  },
  {
    "url": "assets/js/55.7a530a4b.js",
    "revision": "f06590f2dd9ef73024832f3be5e0f2ad"
  },
  {
    "url": "assets/js/56.82660261.js",
    "revision": "0cbcaed554935aa86a9b605b4e5e882d"
  },
  {
    "url": "assets/js/57.6f11d801.js",
    "revision": "66ab8a1ce1274fbbaf6439e3d45bee8f"
  },
  {
    "url": "assets/js/58.d674b6a1.js",
    "revision": "c1e0e7d1af124509a2836202012054fb"
  },
  {
    "url": "assets/js/59.31ee7bb2.js",
    "revision": "2ad9697b50b9cf719c20da65fb163063"
  },
  {
    "url": "assets/js/6.484ee054.js",
    "revision": "1ee3ee1ec45af8fd8b54658218586d12"
  },
  {
    "url": "assets/js/60.92f6d737.js",
    "revision": "a2ec406bbf12e677c0fe6ca1d8b73db0"
  },
  {
    "url": "assets/js/61.fa429fce.js",
    "revision": "6ef738f969b72c7921996e01378f1e97"
  },
  {
    "url": "assets/js/62.5dacaf93.js",
    "revision": "53bed2692136445720583a8e34eafcd6"
  },
  {
    "url": "assets/js/63.e82702c0.js",
    "revision": "21ae78b7dddacf1e0d4a1e97b3e22178"
  },
  {
    "url": "assets/js/64.0de8935a.js",
    "revision": "197abccd24ed690b18d2f335aadb4b29"
  },
  {
    "url": "assets/js/65.2547cb37.js",
    "revision": "0e32fdfe9c99bc9dc248582e5219668e"
  },
  {
    "url": "assets/js/66.b7bcf286.js",
    "revision": "03fad08ee7c3978e6aa35fc1b4e7738c"
  },
  {
    "url": "assets/js/67.91ed35bc.js",
    "revision": "337405fea939b4896d121d0703e54956"
  },
  {
    "url": "assets/js/68.10af75b3.js",
    "revision": "7f587938131feb07df079a7433afea51"
  },
  {
    "url": "assets/js/69.f1bb2e56.js",
    "revision": "4e9bcd516e4146a142d182a401ac2911"
  },
  {
    "url": "assets/js/7.88bf58a8.js",
    "revision": "3ac31caa01e18140c546973aab71150a"
  },
  {
    "url": "assets/js/70.585df28d.js",
    "revision": "138146d9dccb601aa234a595dbe90451"
  },
  {
    "url": "assets/js/71.27a0ddb6.js",
    "revision": "5de7149c8dbccfcbe2376d791e909b82"
  },
  {
    "url": "assets/js/72.b16ec6d7.js",
    "revision": "571468ef8e2e07c074abad262552efed"
  },
  {
    "url": "assets/js/73.49254fa9.js",
    "revision": "5e4b3ef50f0146a9fd58ef330982bbbe"
  },
  {
    "url": "assets/js/74.0958326d.js",
    "revision": "94d5b1d8e902604fb183fbabfbe674cf"
  },
  {
    "url": "assets/js/75.0ebf8dc1.js",
    "revision": "be4341fa7a9c46ef5962613c0a2ef1ed"
  },
  {
    "url": "assets/js/76.1c72901b.js",
    "revision": "f380ea3816023556ef478627ef7f9653"
  },
  {
    "url": "assets/js/77.93027503.js",
    "revision": "33da1e0deb49224357a23ed90a10ae91"
  },
  {
    "url": "assets/js/78.05b4268a.js",
    "revision": "63feeacb31d3c01e0c78c375f47cc093"
  },
  {
    "url": "assets/js/79.fa62cf46.js",
    "revision": "3158bc58969bbdb40663894ef9756351"
  },
  {
    "url": "assets/js/8.da0c383b.js",
    "revision": "118ccad239323e07c295fbd6375c1887"
  },
  {
    "url": "assets/js/80.2ff9558a.js",
    "revision": "b95e68830c73b8b71096331986fd6d75"
  },
  {
    "url": "assets/js/81.891ceb06.js",
    "revision": "38192d42db8a8f4273fc683d1138df47"
  },
  {
    "url": "assets/js/82.47f9ecd9.js",
    "revision": "4009251ebcfc606995bf829ad84b0eda"
  },
  {
    "url": "assets/js/83.017e2edd.js",
    "revision": "a7096318bae29ce4b454de30b0fcc6a5"
  },
  {
    "url": "assets/js/84.e9bffc86.js",
    "revision": "27d3c894e9f58a749d52a2ef17b2aec7"
  },
  {
    "url": "assets/js/85.dacc7bf9.js",
    "revision": "7a064dbf792dfc0dfc0dfe5c23c74f05"
  },
  {
    "url": "assets/js/86.2546717b.js",
    "revision": "18e8bb481dd7f2a689d9fb168928af55"
  },
  {
    "url": "assets/js/87.731d1dbf.js",
    "revision": "2205824bd0a68eec76cd625945d2e8ec"
  },
  {
    "url": "assets/js/88.4dcaff5e.js",
    "revision": "f76578e27985a4701fe2465330a1db6d"
  },
  {
    "url": "assets/js/89.2f5fb62b.js",
    "revision": "9498f0286f10087556da71419b14bbf1"
  },
  {
    "url": "assets/js/9.d741b8fa.js",
    "revision": "479050b4b6cf8561f26e8fbf179e23d9"
  },
  {
    "url": "assets/js/90.7234d50e.js",
    "revision": "765d136b60674b7588fbb2db8bdf3628"
  },
  {
    "url": "assets/js/91.ab153a61.js",
    "revision": "bb82f95ab97ed3b2168e828ae8306498"
  },
  {
    "url": "assets/js/92.05d3b666.js",
    "revision": "fa364d7900d40a57dedc43c681ae010e"
  },
  {
    "url": "assets/js/93.1d6011a3.js",
    "revision": "26a8b9d03dd362b0b69136cd8fd2fabc"
  },
  {
    "url": "assets/js/94.8baf7b24.js",
    "revision": "ae5c551cfda05ee672af47dfdd445ec3"
  },
  {
    "url": "assets/js/95.1ea47e74.js",
    "revision": "c7fae6550c1e8449b17bf00a26397a60"
  },
  {
    "url": "assets/js/96.3e8807d3.js",
    "revision": "648bb3c4ce9ab5c174ef0a435a06dc7a"
  },
  {
    "url": "assets/js/97.799febf8.js",
    "revision": "41cb7d350018ba42a746c70cdac0a1c6"
  },
  {
    "url": "assets/js/98.eb7c2a81.js",
    "revision": "18123ac2d92a6f7854177b467f20a766"
  },
  {
    "url": "assets/js/99.4569130e.js",
    "revision": "43f49eab82b2f7a0137eca3ed0b02387"
  },
  {
    "url": "assets/js/app.0a34f7f8.js",
    "revision": "f08f8aa3b0c66092370a5e6f22fe37a5"
  },
  {
    "url": "assets/js/vendors~docsearch.d566a751.js",
    "revision": "f9d228d23c26dd63baa4fa53c4259840"
  },
  {
    "url": "configuration/api.html",
    "revision": "b83c805e066f459907686f3f7cb2dff4"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "3a8ef8543471db4273d68bcd5a86e74e"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "2ec8e8173522ff8456bbf52af04d6b3f"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "f0d2bbe0c4f3a28ef3c9d10f1e9ad28e"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "bc0462885daf7f0b5dcf84cbe4cdfb14"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "1e1f0f424bc3d71cf243f5d17dc13fd3"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "cca9def5e53ded573f083a4e484a606e"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "4316ad6e985f250a69f14d4edc2417a7"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "8f913cb7eb4d4c71f7ab4fa103f51486"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "8522ef245d3520a6737143cd83580c3e"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "1f83abce640b3d9607220f81b15cb170"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "a8b9c969f01c48c3811f594bc1ac949d"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "b771a1daf02dfd44e26ab1f933e2be95"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "467c9a0dde60fb8c2c6050b99ccf3591"
  },
  {
    "url": "configuration/index.html",
    "revision": "28d9b85649b470544c37d9b8a3bb96e4"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "0060fe5668d602f3b2ef6dc07261b144"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "5f8d7efb80089f761f344d006263bbb1"
  },
  {
    "url": "contributing.html",
    "revision": "00c16682defad84035a7872102674a79"
  },
  {
    "url": "core-extensions/accordion.html",
    "revision": "d556f6c5db4c911eac4605631618ee55"
  },
  {
    "url": "core-extensions/custom-fonts.html",
    "revision": "43f6ae953b390c1d2359df5a63bd9289"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "11fb5b3d16b5d52aa1c7064a67678ad1"
  },
  {
    "url": "core-extensions/date-time-picker.html",
    "revision": "4b0be38439d57a1c47a4060c508a1473"
  },
  {
    "url": "core-extensions/google-maps.html",
    "revision": "fce5fdb49259405283f9a952c022e4e1"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "e13e83e04a02b470205598d8145e511f"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "2d6fd53c5bfc9deac6db2f08a8d39f67"
  },
  {
    "url": "core-extensions/js-button.html",
    "revision": "657ede19cc9637925e20418d67b7a386"
  },
  {
    "url": "core-extensions/metaboxes.html",
    "revision": "224f3a7d41a18081fb30caf8e3272cee"
  },
  {
    "url": "core-extensions/multi-media.html",
    "revision": "a13542e09988c8e2fd690bb54db00d64"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "27497a7af1296be07983b86e55451551"
  },
  {
    "url": "core-extensions/repeater.html",
    "revision": "3fd82b04440db67714edca5acc9cd004"
  },
  {
    "url": "core-extensions/search.html",
    "revision": "0bb3f014f2d33dd8714bf0cc549c1e20"
  },
  {
    "url": "core-extensions/shortcodes.html",
    "revision": "207217397a385825c2291f226cc368da"
  },
  {
    "url": "core-extensions/social-profiles.html",
    "revision": "9d2e45724bb231397a334542f164b2ad"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "03dddd74e5c7ff670eedf10e008a9618"
  },
  {
    "url": "core-fields/background.html",
    "revision": "d86e4806b4a3c089d065a68308b3082d"
  },
  {
    "url": "core-fields/border.html",
    "revision": "1f28ef5790e4d2108a9af1b29cb05203"
  },
  {
    "url": "core-fields/box-shadow.html",
    "revision": "6fb7b678b5cde6dbc57a6b75c1a4fe43"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "a6771771a61246f6ea4b56250547d087"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "3d5398296524077231e97c64242a5aab"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "359190e813a10129be1e32d0d933419e"
  },
  {
    "url": "core-fields/color-palette.html",
    "revision": "384d9b4aef1e50f87b75f3b9e63b918a"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "27694d35c1a270838a42e73cbf1cf716"
  },
  {
    "url": "core-fields/color.html",
    "revision": "39abe71a15cdb384bb05409659250f23"
  },
  {
    "url": "core-fields/date.html",
    "revision": "57c25c6967f16116e3ceecce99dfd356"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "115266450ad2c6d167c68b0f002cbc72"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "f809c86a6f4afece2f8ffacab5463dc0"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "17265d41b1e3f46423f308d6bea4862d"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "1fe757caa95047c7971f9c316cb7a205"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "35eedfcdbfd0bcd1c45be869419e23e0"
  },
  {
    "url": "core-fields/index.html",
    "revision": "dac71f689424db2f26cece0fe4d68f0f"
  },
  {
    "url": "core-fields/info.html",
    "revision": "3901c09f4e5978d7bc5f1effff90ecdd"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "c21edafe80677b41eb43c14e656d3327"
  },
  {
    "url": "core-fields/media.html",
    "revision": "151ea535100c8433af30504555899021"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "4243feee2f29371809e6faa6bd39ed5a"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "cb80be9edee55331afd78e7348308775"
  },
  {
    "url": "core-fields/password.html",
    "revision": "99f33966bdb851548ebebac682ca1009"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "32ba654ad773db356fd27f814f34b794"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "b8f141f65b159b51b638d044e3f7b703"
  },
  {
    "url": "core-fields/section.html",
    "revision": "13719eb47ed651c76fca20e55b7cf705"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "2a55a5f8ba800eb946544c5025cb1a00"
  },
  {
    "url": "core-fields/select.html",
    "revision": "bff74d98c13a6723a37b844b91f15689"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "4d80cdce6ab0d63ec255a7c2b8f9e5e9"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "de4a85672f8c06c3e45144ca305d9289"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "b8b5dfdb360878704c2f52b06ed135bf"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "0fe421637ff1bb8a59257bc0d2e257c0"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "a645cf2a7cc51f80dab7a692a915eae3"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "3173d8cb8268753a9003ee85c2b319df"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "b4c9a123045eff5e3ddc461006a7cc39"
  },
  {
    "url": "core-fields/text.html",
    "revision": "4bf1eb1232eba8725cbe2145c8bbe05d"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "e8fd0ef02985f5d44de0cfe242c55731"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "2a3270d8d50a2f0f16c07c49cc592d92"
  },
  {
    "url": "core/index.html",
    "revision": "cb7eb5d2519e00d725aa57539d8c9939"
  },
  {
    "url": "faq/index.html",
    "revision": "e984b5a34107249b3604122107b9f709"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "b0ebb2ddec8408b1ba5836dab18b3337"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "b50857e3545eb3cdb24598bb38d434f0"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "81e4be8106c5634bcfa6aac1dabd730e"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "3ec82adf63ac6165b8de5bc3de734e72"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "cd111c81f490d1bbb1421aff5915293d"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "df15d65ac3c3c4a40af0115df796a6bd"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "70eefb0b6988db775a2559e70e3937fe"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "ee7207d2dcfb39241cce4f9ebbeacf70"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "f632751b27bedb33d0b8afa875430631"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "84addd7fd93d0bf75b853842888fb783"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "946e15ea70bbe05293b85e94b22da580"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "734bfa3a6330061e7227a3d19c1a8856"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "8884865f1b7beb6dc96b20e4bc423dfc"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "d75408d4e916a62cbdd24d5c17d099de"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "3e8190ff92faf760295cf8161648614d"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "1765f2d12a11ed6cf57201191fe77468"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "77870de72450189e988db689ee8d0927"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "fe791434a6bf046874e3a855beb32dc2"
  },
  {
    "url": "guides/index.html",
    "revision": "be6d3d369273abd0f7ef834972a62201"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "13f4875efc369edd36958eab8f21552f"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "979c0d125ef754149cdafea8126ba961"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "2eb29078b4664d45e6077bd9b7935d9d"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "686da184ad8e5c287271b8d2d15db856"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "7459e971995b151b9d74c60603f9bd6d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "8442c58fed82c31b8cb4bb9d63f8bc7a"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "eec116dc34b5bbe1d36094cdf088442a"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "fb1d1a32a0684e2e75f12e918df06c5e"
  },
  {
    "url": "premium/index.html",
    "revision": "da88bb33539347b51d0d51eeec222eaf"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "430fe93eb40310ec56166040b98b12ca"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
