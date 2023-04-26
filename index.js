function calculateResult() {
    var q1 = localStorage.getItem("q1");
    var q2 = localStorage.getItem("q2");
    var q3 = localStorage.getItem("q3");
    var q4 = localStorage.getItem("q4");
    var q5 = localStorage.getItem("q5");
    var q6 = localStorage.getItem("q6");
    var q7 = localStorage.getItem("q7");
    var q8 = localStorage.getItem("q8");
    var q9 = localStorage.getItem("q9");
    var q10 = localStorage.getItem("q10");
    var q11 = localStorage.getItem("q11");
    var q12 = localStorage.getItem("q12");
    var q13 = localStorage.getItem("q13");
    var q14 = localStorage.getItem("q14");
    var q15 = localStorage.getItem("q15");
    var q16 = localStorage.getItem("q16");
    var q17 = localStorage.getItem("q17");
   

    var items = {
      item1: {
        image1: "Products/cethaphilMoisturiser.jpg",
        title1: "Cethaphil Moisturiser",
        link1: "https://www.nykaa.com/p/p/20991?id=44R4zk4U&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image2: "Products/pplumFaceMist.jpg",
        title2: "Plum Face Mist",
        link2: "https://www.nykaa.com/p/p/306640?id=4HRGTv7g&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/AqualogicaSS.jpg",
        title3: "Aqualogica Sunscreen",
        link3: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mmeAcne.jpg",
        title4: "Mama Earth Bye Bye Acne Face Cream",
        link4: "https://www.nykaa.com/p/p/4656999?id=JHBfyFci&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image5: "Products/mmeWash.jpg",
        title5: "Mama Earth Face Wash",
        link5: "https://www.nykaa.com/p/p/1123476?id=HkYGMQOq&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"     
      },
      item2: {
        image1: "Products/mcafeFScrub.jpg",
        title1: "M Caffeine Coffee Face Scrub",
        link1: "https://www.nykaa.com/p/p/383226?id=HGDGMVWV&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image2: "Products/mmeBlemish.jpg",
        title2: "Mama Earth Bye Bye Blemishes Face Cream",
        link2: "https://www.nykaa.com/p/p/559843?id=G4YHsX8Z&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image3: "Products/AqualogicaSS.jpg",
        title3: "Aqualogica Sunscreen",
        link3: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mmeAcne.jpg",
        title4: "Mama Earth Bye Bye Acne Face Cream",
        link4: "https://www.nykaa.com/p/p/4656999?id=JHBfyFci&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image5: "Products/cethaphilMoisturiser.jpg",
        title5: "Cethaphil Moisturiser",
        link5: "https://www.nykaa.com/p/p/20991?id=44R4zk4U&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native "  
      },
      item3: {
        image1: "Products/cethaphilMoisturiser.jpg",
        title1: "Cethaphil Moisturiser",
        link1: "https://www.nykaa.com/p/p/20991?id=44R4zk4U&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image2: "Products/mmeBlemish.jpg",
        title2: "Mama Earth Bye Bye Blemishes Face Cream",
        link2: "https://www.nykaa.com/p/p/559843?id=G4YHsX8Z&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image3: "Products/mmeOil.jpg",
        title3: "Mama Earth Oil Free Face Wash",
        link3: "https://www.nykaa.com/p/p/4548224?id=kJYkviW5&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeWash.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/derma.jpg",
        title5: "The Derma Co. Face Serum",
        link5: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item4: {
        image1: "Products/miniMoist.jpg",
        title1: "Minimalist Sepicalm 3% Face Moisturiser",
        link1: "https://www.nykaa.com/p/p/1068467?id=fHD4sTyJ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/derma.jpg",
        title2: "The Derma Co. Face Serum",
        link2: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/reMoist.jpg",
        title3: "Re'equil Atorep Barrier Cream with Ceramide & Shea Butter",
        link3: "https://www.nykaa.com/p/p/654494?id=f4lHyVrv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/AqualogicaSS.jpg",
        title4: "Aqualogica Sunscreen",
        link4: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/mcafeWash.jpg",
        title5: "M Caffeine Coffee Face Scrub",
        link5: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item5: {
        image1: "Products/mcafeWash.jpg",
        title1: "M Caffeine Coffee Face Scrub",
        link1: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/cethaphilMoisturiser.jpg",
        title2: "Cethaphil Moisturiser",
        link2: "https://www.nykaa.com/p/p/20991?id=44R4zk4U&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image3: "Products/mmeOil.jpg",
        title3: "Mama Earth Oil Free Face Wash",
        link3: "https://www.nykaa.com/p/p/4548224?id=kJYkviW5&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/pplumFaceMist.jpg",
        title4: "Plum Face Mist",
        link4: "https://www.nykaa.com/p/p/306640?id=4HRGTv7g&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/derma.jpg",
        title5: "The Derma Co. Face Serum",
        link5: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item6: {
        image1: "Products/mmeSS.jpg",
        title1: "Mama Earth Vitamin C Sunscreen",
        link1: "https://www.nykaa.com/p/p/9279642?id=fGBGvpHL&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/mcafeEye.jpg",
        title2: "M Caffeine Under Eye Patches",
        link2: "https://www.nykaa.com/p/p/7999029?id=4JBkydYa&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image3: "Products/mmeOil.jpg",
        title3: "Mama Earth Oil Free Face Wash",
        link3: "https://www.nykaa.com/p/p/4548224?id=kJYkviW5&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeWash.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/derma.jpg",
        title5: "The Derma Co. Face Serum",
        link5: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item7: {
        image1: "Products/miniHead.jpg",
        title1: "Minimalist Salicylic Acid + LHA 2% Face Cleanser",
        link1: "https://www.nykaa.com/p/p/1067998?id=fGBfypF3&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image2: "Products/mmeSS.jpg",
        title2: "Mama Earth Vitamin C Sunscreen",
        link2: "https://www.nykaa.com/p/p/9279642?id=fGBGvpHL&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/mcafeEye.jpg",
        title3: "M Caffeine Under Eye Cream",
        link3: "https://www.nykaa.com/p/p/7292096?id=J4BkvpDl&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeFScrub.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/383226?id=HGDGMVWV&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image5: "Products/cethaphilMoisturiser.jpg",
        title5: "Cetaphil Moisturiser",
        link5: "https://www.nykaa.com/p/p/20991?id=44R4zk4U&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item8: {
        image1: "Products/miniKit.jpg",
        title1: "Minimilistic Dry Skincare Kit",
        link1: "https://www.nykaa.com/p/p/6098558?id=JHYJvzX8&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/AqualogicaSS.jpg",
        title2: "Aqualogica Sunscreen",
        link2: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/AquaMist.jpg",
        title3: "Aqualogica Mist",
        link3: "https://www.nykaa.com/p/p/6122267?id=GJDGsbmm&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeWash.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/derma.jpg",
        title5: "The Derma Co. Face Serum",
        link5: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item9: {
        image1: "Products/retEye.jpg",
        title1: "Retinol Under Eye Cream with Vitamin C & Hyaluronic Acid",
        link1: "https://www.nykaa.com/p/p/1241536?id=GGBksb3H&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native ",
        image2: "Products/AqualogicaSS.jpg",
        title2: "Aqualogica Sunscreen",
        link2: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/mmeOil.jpg",
        title3: "Mama Earth Oil Free Face Wash",
        link3: "https://www.nykaa.com/p/p/4548224?id=kJYkviW5&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeWash.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/1484949?id=HHDHyQoQ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/derma.jpg",
        title5: "The Derma Co. Face Serum",
        link5: "https://www.nykaa.com/p/p/5178099?id=J4lGyFCE&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item10: {
        image1: "Products/miniMoist.jpg",
        title1: "Minimalist Sepicalm 3% Face Moisturiser",
        link1: "https://www.nykaa.com/p/p/1068467?id=fHD4sTyJ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/reMoist.jpg",
        title2: "Re'equil Atorep Barrier Cream with Ceramide & Shea Butter",
        link2: "https://www.nykaa.com/p/p/654494?id=f4lHyVrv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/AqualogicaSS.jpg",
        title3: "Aqualogica Sunscreen",
        link3: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/mcafeFScrub.jpg",
        title4: "M Caffeine Coffee Face Scrub",
        link4: "https://www.nykaa.com/p/p/383226?id=HGDGMVWV&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/AquaMist.jpg",
        title5: "Aqualogica Mist",
        link5: "https://www.nykaa.com/p/p/6122267?id=GJDGsbmm&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item11: {
        image1: "Products/plumGreen.jpg",
        title1: "Plum Green Tea Face Moisturiser",
        link1: "https://www.nykaa.com/p/p/1324108?id=HGYkrzt1&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image2: "Products/AqualogicaSS.jpg",
        title2: "Aqualogica Sunscreen",
        link2: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image3: "Products/miniMoist.jpg",
        title3: "Minimalist Sepicalm 3% Face Moisturiser",
        link3: "https://www.nykaa.com/p/p/1068467?id=fHD4sTyJ&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image4: "Products/AquaMist.jpg",
        title4: "Aqualogica Hydrate+ Refresh Toning Mist",
        link4: "https://www.nykaa.com/p/p/6122267?id=GJDGsbmm&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/reMoist.jpg",
        title5: "Re'equil Atorep Barrier Cream with Ceramide & Shea Butter",
        link5: "https://www.nykaa.com/p/p/654494?id=f4lHyVrv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      },
      item12: {
        image1: "Products/cliniqMen.jpg",
        title1: "Clinique For Men face wash",
        link1: "https://www.nykaa.com/clinique-for-men-charcoal-face-wash/p/334508?se=0",
        image2: "Products/mmSerum.jpg",
        title2: "Man Matters serum",
        link2: "https://manmatters.com/dp/11954287?utm_source=google&utm_medium=PLA&utm_campaign=Shopping_Manual_MM_MinoxBeard_product_beardmax&gclid=CjwKCAjwitShBhA6EiwAq3RqA5f-lRSXenpicv-tJaOYmuTeTHfZ2bZxhSJFWItJGrlso0XpUZetrhoC7wUQAvD_BwE",
        image3: "Products/HyAFace.jpg",
        title3: "WOW Hyaluronic Acid Face Wash",
        link3: "https://www.nykaa.com/wow-skin-science-hyaluronic-acid-face-wash-gel/p/7248335?skuId=7248321&se=0",
        image4: "Products/AqualogicaSS.jpg",
        title4: "Aqualogica Sunscreen",
        link4: "https://www.nykaa.com/p/p/5009759?id=HJB4d4Jv&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native",
        image5: "Products/mcafeEye.jpg",
        title5: "M Caffeine Under Eye Cream",
        link5: "https://www.nykaa.com/p/p/7292096?id=J4BkvpDl&se=1&utm_source=nykaaApp&utm_medium=referral&utm_campaign=shareAndEarn&is_native"  
      }
    };


    var result = 0;
    if (q1 === 'a1' && q2 === 'a2' && (q3 === 'a3' || q3 === 'c3') && q4 === 'a4' && q5 === 'a5' && q6 === 'a6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && (q12 === 'a12' || q12 === 'c12')
    && q13 === 'a13' && (q14 === 'a14' || q14 === 'c14') && q15 === 'a15' && (q16 === 'a16' || q16 === 'c16') && q17 === 'a17') {
      result = 1;
    }
    else if (q1 === 'b1' && q2 === 'a2' && q3 === 'a3' && q4 === 'a4' && q5 === 'a5' && q6 === 'a6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && q13 === 'a13' && q14 === 'a14' && q15 === 'a15' && q16 === 'a16' && q17 === 'a17') {
      result = 2;
    }
    else if (q1 === 'b1' && q2 === 'a2' && q3 === 'b3' && q4 === 'b4' && q5 === 'b5' && q6 === 'b6' 
    && q7 === 'b7' && q8 === 'b8' && q9 === 'b9' && q10 === 'b10' && q11 === 'b11' && q12 === 'b12' 
    && q13 === 'b13' && q14 === 'b14' && q15 === 'b15' && q16 === 'b16' && q17 === 'b17'){
        result = 3;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'a4' && q5 === 'a5' && q6 === 'a6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && q13 === 'a13' && q14 === 'a14' && q15 === 'a15' && q16 === 'a16' && q17 === 'a17') {
      result = 4;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'a5' && q6 === 'a6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && q13 === 'a13' && q14 === 'a14' && q15 === 'a15' && q16 === 'a16' && q17 === 'a17') {
      result = 5;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'c5' && q6 === 'a6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && q13 === 'a13' && q14 === 'a14' && q15 === 'a15' && q16 === 'a16' && q17 === 'a17') {
      result = 6;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'c5' && q6 === 'c6' 
    && q7 === 'a7' && q8 === 'a8' && q9 === 'a9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && q13 === 'a13' && q14 === 'a14' && q15 === 'a15' && q16 === 'a16' && q17 === 'a17') {
      result = 7;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'c5' && q6 === 'c6' 
    && q7 === 'c7' && q8 === 'b8' && q9 === 'b9' && q10 === 'a10' && q11 === 'a11' && q12 === 'a12' 
    && (q13 === 'b13' || q13 === 'c13') && (q14 === 'b14' || q14 === 'c14') && (q15 === 'b15' || q15 === 'c15') && (q16 === 'b16' || q16 === 'c16' || q16 === 'd16') && (q17 === 'a17' || q17 === 'b17')) {
      result = 8;
    }
    else if ((q1 === 'c1' || q1 === 'a1') && q2 === 'a2' && q3 === 'b3' && (q4 === 'a4' || q4 === 'b4') && q5 === 'b5' && (q6 === 'a6' || q6 === 'b6') 
    && (q7 === 'a7' || q7 === 'b7') && (q8 === 'a8' || q8 === 'c8') && q9 === 'b9' && (q10 === 'b10' || q10 === 'a10') && (q11 === 'a11' || q11 === 'b11') && (q12 === 'b12' || q12 === 'a12')
    && (q13 === 'b13' || q13 ==='c13') && q14 === 'c14' && (q15 === 'c15' || q15 === 'a15') && (q16 === 'c16' || q16 === 'a16') && q17 === 'b17') {
      result = 9;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'c5' && (q6 === 'b6' || q6 === 'c6') 
    && (q7 === 'a7' || q7 === 'c7') && (q8 === 'b7' || q8 === 'c8') && q9 === 'b9' && q10 === 'b10' && q11 === 'b11' && q12 === 'b12' 
    && q13 === 'c13' && q14 === 'b14' && q15 === 'b15' && q16 === 'b16' && q17 === 'c17') {
      result = 10;
    }
    else if (q1 === 'c1' && q2 === 'a2' && q3 === 'c3' && q4 === 'c4' && q5 === 'c5' && q6 === 'c6' 
    && q7 === 'a7' && q8 === 'c8' && (q9 === 'b9' || q9 === 'c9') && q10 === 'b10' && q11 === 'b11' && q12 === 'c12' 
    && q13 === 'b13' && q14 === 'b14' && q15 === 'b15' && q16 === 'c16' && q17 === 'b17') {
      result = 11;
    }
    else if(q2=== 'b2'){
      result = 12;
    }
    else if (q16 === 'd16'){
      result = 6;
    } 
    else {
      result = 20;
    }

    var resultElement = document.getElementById("result");
    if (result == 1) {
      var currentItem = items.item1;
    } else if (result == 2) {
      var currentItem = items.item2;
    } else if (result == 3){
      var currentItem = items.item3;
    } else if (result == 4){
      var currentItem = items.item4;
    } else if (result == 5){
      var currentItem = items.item5;
    } else if (result == 6) {
      var currentItem = items.item6;
    } else if (result == 7) {
      var currentItem = items.item7;
    } else if (result == 8) {
      var currentItem = items.item8;
    } else if (result == 9) {
      var currentItem = items.item9;
    } else if (result == 10) {
      var currentItem = items.item10;
    } else if (result == 11) {
      var currentItem = items.item11;
    } else if (result == 12) {
      var currentItem = items.item12;
    } else if (result == 20) {
      var currentItem = items.item7;
    }
    else {
      var currentItem = null;
    }

    var itemHtml1 = "<div class='item'><img class='prod' src='" + currentItem.image1 + "' alt='" + currentItem.title1 + "'><h5>" + currentItem.title1 + "</h5><a target='_blank' href='" + currentItem.link1 + "'>Buy now!</a></div>";
    var itemHtml2 = "<div class='item'><img class='prod' src='" + currentItem.image2 + "' alt='" + currentItem.title2 + "'><h5>" + currentItem.title2 + "</h5><a target='_blank' href='" + currentItem.link2 + "'>Buy now!</a></div>";
    var itemHtml3 = "<div class='item'><img class='prod' src='" + currentItem.image3 + "' alt='" + currentItem.title3 + "'><h5>" + currentItem.title3 + "</h5><a target='_blank' href='" + currentItem.link3 + "'>Buy now!</a></div>";
    var itemHtml4 = "<div class='item'><img class='prod' src='" + currentItem.image4 + "' alt='" + currentItem.title4 + "'><h5>" + currentItem.title4 + "</h5><a target='_blank' href='" + currentItem.link4 + "'>Buy now!</a></div>";
    var itemHtml5 = "<div class='item'><img class='prod' src='" + currentItem.image5 + "' alt='" + currentItem.title5 + "'><h5>" + currentItem.title5 + "</h5><a target='_blank' href='" + currentItem.link5 + "'>Buy now!</a></div>";
    resultElement.innerHTML = itemHtml1 + itemHtml2 + itemHtml3 + itemHtml4 + itemHtml5;
}