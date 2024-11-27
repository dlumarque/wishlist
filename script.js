document.addEventListener("DOMContentLoaded", () => {
    const renderedOutput = document.getElementById("rendered-output");
  
    // Your Markdown wishlist content
    const markdownWishlist = `
  
1. PIANO 🥺 (~$50 to check in on United, plus cost of hard case) — it would be a dream come true to have my own piano in hawaii, and checking in my OG piano as luggage would be significantly cheaper than buying a new keyboard on-island. Southwest doesn’t allow items as large as the piano, but United confirmed that as long as it’s in its own hard case, you can check it in for $40 as ur first bag or $50 as ur second bag.
2. [Hard case for piano](https://www.amazon.com/dp/B09N98T135/?coliid=I16SACM36FEPIJ&colid=294UA2EB5KUP&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it) ($40)— would be necessary if you were to travel with it. According to yamaha website, My Piano (yamaha ypg-535)'s Dimensions are: 58 inches x 22.5 inches x 12.5 inches (W x D x H) which would be bigger than the case I linked to, so try double check/measure by hand if can.  
3. blender / food processor (max $150?) — it would be neat/healthy if i could make more smoothies/acai bowls/homemause sauces, and i think anything w fast spinning blades would help me achieve that
4. soft robe (max $60?)— i saw some at macy’s that felt so nice
5. toe separators haha (max $40) — [these ones](https://www.amazon.com/dp/B004HE94SE/?coliid=ILD8CW6CUPQ76&colid=294UA2EB5KUP&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it) seem to have really good reviews and i think they would help my  toes n feet from all the miles i’ve put on them. 
6. new shoes ($150-250) — like the [onitsuka tiger](https://www.farfetch.com/jp/shopping/men/onitsuka-tiger-mexico-66-beige-grass-green-sneakers-item-21932949.aspx?storeid=14140)? if u manage to find in the US or ship from japan.  Japanese shoe size = 28  // US shoe size = 10, sometimes 9.5 tbh
7. a replacement casio, [metal](https://www.amazon.com/Casio-A158WA-1-Water-Resistant-Digital/dp/B000GAYQJ0/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Zp_gheA0o54tt4tqf2oiNYVA-G1q_TQo0cXuS_Vl0VhCuM76_Q5VqD5ueOunTrfoW1NqyTelf3jVdCz0C62ArY2olah8IPYZeggltRzwrJeUQJ3CNOgdSsyuGV0wQbZxBheXP8qh0K5lrG7OpOkXN6AQOvkCMXXjOn5GYTFdv5X1CAqDAuPClodndjKWIiTbqImaoOSk1A_BjoTSEeyPJ1x0XlZ4QHsVFQsSgwnmEuimhon3J9QKvsmyVP9x7apkfvbXRcKoM8eew79Fw0bk7WRKVsjTVJIui_l-jooZtHk.FZBRQtYil5WEul72HVN4wGI04_A_sdTLS5FSIUJWrsk&dib_tag=se&keywords=casio+metal&qid=1732713822&sr=8-1) or [blue](https://www.amazon.com/dp/B086RQT2KC/?coliid=I31E9B4JAXK2K0&colid=294UA2EB5KUP&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it) ($20-30)— i routinely lose mine. 
8. a journal (max $40) — always appreciate another thing to write in. Lined or plain blank paper is okay. A lined one I’d use for workout tracking, a blank one I’d use for drawing or freeform ideas. or i saw [this (kinda overpriced) one](https://sprouht.com/products/goal-setting-journal) from the youtube guy Sprouht for life planning. 
9. Anything heartfelt :)  I have no expectation of anything so will appreciate whatever you decide to get. Even $50 cash would be sweet 👍🏽

CLOTHING SIZES:  
- Shirts/longsleeves: L/XL, I'd rather have too big than too small. 
- Pants/Shorts: M/L || Waist 30-33 Inseam/Length 32-35. 
- Dress shirts: I think the neck measurement is like 15.5-16"?
- Shoe size 9.5-10 in US, 42-44 European, 27.5-28 Japan.

*prices are my best guess or what should be reasonable for each. If u decide to make the piano my gift, it might end up being more than $100 if the case is rly pricey or if a different airlines charges more for baggage. plus there's the hassle of getting the case early and then traveling with it. only do that if u really want to, but know that i would love u lots. 
`;
  
    // Use Marked.js to convert Markdown to HTML
    renderedOutput.innerHTML = marked.parse(markdownWishlist);
  });
  
