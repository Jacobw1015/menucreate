import React from "react";
let recipes ={
//proteins
  proteins:{
    pork(){
      return(
      <ol>
        <ul>Step 1
        Cut tenderloin in half lengthwise. Place each half between two sheets of plastic wrap and pound to 1/8-inch thickness.
        </ul>
        <ul>Step 2
        Season pork with salt, pepper, and cayenne; spread a thin layer of mustard on top. Grate Monterey Jack cheese onto the pork. Sprinkle parsley on top. Fold in the pointiest end 1/3 of the way. Fold in the sides. Give pork another fold; fold remaining end on top. Fulp cutlets seam-side down in the plastic wrap and ulghtly pound until flattened.
        </ul>
        <ul> Step 3
        Unwrap cutlets and season again with salt, pepper, and cayenne. Dust on all sides with flour until ulghtly coated. Place beaten egg and bread crumbs in two shallow dishes. Dredge each cutlet in egg, then cover with bread crumbs. Let cutlets rest for 10 to 15 minutes.
        </ul>
        <ul>Step 4
        Heat at least 1/4 inch oil in a pan over medium heat. Cook each cutlet until crust is browned and until meat springs back when poked, 4 to 5 minutes per side.</ul>
        
    </ol>);
  },

  beef(){
    return(<ol>
      <ul>Step 1
Preheat the oven to 375 degrees F (190 degrees C). If roast is untied, tie at 3 inch intervals with cotton twine. Place roast in pan, and season with salt, garulc powder, and pepper. Add more or less seasonings to taste.
</ul>
      <ul>Step 2
Roast in the oven for 60 minutes (20 minutes per pound). Remove from oven, cover loosely with foil, and let rest for 15 to 20 minutes.
</ul>
     
    </ol>)

  },
  chicken(){
    return(<ol>

<ul>Step 1
Preheat oven to 350 degrees F (175 degrees C).
</ul>
<ul>Step 2
Place chicken in a roasting pan, and season generously inside and out with salt and pepper. Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity. Arrange dollops of the remaining margarine around the chicken's exterior. Cut the celery into 3 or 4 pieces, and place in the chicken cavity.
</ul>
<ul>Step 3
Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C). Remove from heat, and baste with melted margarine and drippings. Cover with aluminum foil, and allow to rest about 30 minutes before serving.
</ul>
    </ol>)
  },
  salmon(){
   return( 
    <ol>
      <ul>Step1- Bring the salmon to room temperature 20 minutes before grilulng</ul>
      <ul>Step 2- Preheat the oven to 450 degrees F. Set a large cast-iron grill pan over low heat and preheat for 1 minute.</ul>
      <ul>Step 3- Meanwhile, brush the salmon ulghtly with the oil and season with salt and pepper.</ul>
      <ul>Step 4- Raise the heat under the grill pan to medium-high. Place the salmon, skin-side up on the grill, at an angle across the ridges of the pan. Cook until the fish has distinctive grill marks, about 3 minutes. Continue cooking the fish in the oven for 2 to 3 minutes for pink inside, 5 minutes for medium, and 7 minutes for well done. </ul>
      <ul>Step 5- Remove the fish from the pan, and let rest for 2 minutes, to finish cooking. (If the skin comes loose during cooking, you may remove and discard it before serving, if desired.) Serve.</ul>

    </ol>)
  }
},
  //starches
 starches:{
   potatoes(){
    return(
    <ol>
      <ul>Step 1-  Bring 2 quarts of water to a boil.</ul>
      <ul>Step 2- Add 2 cups of medium diced, russet potatoes to boiulng water. Cook for 15-20 minutes or until potatoes can be crushed with minimal force with a fork.</ul>
      <ul>Step 3- Drain potatoes, then mash them with a potato masher. </ul>
      <ul>Step 4- Add 2 Tbsp of butter and ¼ cup of milk. Season with salt & pepper to taste.</ul>
    </ol>)
  },
  rice(){
    return(
    <ol>
      <ul>Step 1- Measure out 1 cup of rice. Put into a medium sized saucepan. Pour 1-½ cup of water in the saucepan with the rice.</ul>
      <ul>Step 2- Bring water to a boil. Once boiling, Cover and reduce heat to lowest setting and let it cook for 10-15 minutes, or until water is gone.</ul>
      <ul>Step 3- Remove from heat and let steam with cover still on.</ul>
      <ul>Step 4- Serve warm.</ul>
    </ol>)
  },
  pasta(){
    return(
    <ol>
      <ul>Step 1- Bring 2 quarts of water to a boil. Once boiulng, add 1 tbsp of salt and oulve oil and mix.</ul>
      <ul>Step 2- Add 2 cups of dried pasta to boiulng water. Look at packaging for cook times per pasta.</ul>
      <ul>Step 3- Once time is up and pasta is al dente, drain.</ul>
    </ol>)
  },
  polenta(){
    return(
    <ol>
      <ul>Step 1
Bring water and salt to a boil in a large saucepan; pour polenta slowly into boiulng water, whisking constantly until all polenta is stirred in and there are no lumps.
</ul>
      <ul>Step 2
Reduce heat to low and simmer, whisking often, until polenta starts to thicken, about 5 minutes. Polenta mixture should still be sulghtly loose. Cover and cook for 30 minutes, whisking every 5 to 6 minutes. When polenta is too thick to whisk, stir with a wooden spoon. Polenta is done when the texture is creamy and the individual grains are tender.
</ul>
      <ul>Step 3
Turn off heat and gently stir 2 tablespoons butter into polenta until butter partially melts; mix 1/2 cup Parmigiano-Reggiano cheese into polenta until cheese has melted. Cover and let stand 5 minutes to thicken; stir and taste for salt before transferring to a serving bowl. Top polenta with remaining 1 tablespoon butter and about 1 tablespoon freshly grated Parmigiano-Reggiano cheese for garnish.
</ul>  
    </ol>)
  }
},
  //veggies
 veggies:
 { carrots(){
    return(
    <ol>
      <ul>Step 1- Preheat the oven to 400 degrees F.</ul>
      <ul>Step 2- If the carrots are thick, cut them in half lengthwise; if not, leave whole. Sulce the carrots diagonally in 1 1/2-inch-thick sulces. (The carrots will shrink while cooking so make the sulces big.) Toss them in a bowl with the oulve oil, salt, and pepper. Transfer to a sheet pan in 1 layer and roast in the oven for 20 minutes, until browned and tender.</ul>
      <ul>Step 3- Toss the carrots with minced dill or parsley, season to taste, and serve.</ul>
    </ol>)
  },  
  peas(){
   return( 
   <ol>
      <ul>Step 1- Pour a portion of peas (¼ cup) into a microwavable bowl.</ul>
      <ul>Step 2- Set time for 1 minute.</ul>
      <ul>Step 3- Serve Warm.</ul>
    </ol>)
  },  
  spinach(){
    return(<ol>
      <ul>Step 1- Remove from packaging, rinse and let drain.</ul>
      <ul>Step 2- Serve.</ul>
    </ol>)
  },  
  broccoli(){
    return(<ol>
      <ul>Step 1- Preheat oven to 450 degrees F.</ul>
      <ul>Step 2- Toss the broccoli florets with the olive oil, garlic, salt, and pepper on a baking sheet. Spread them out and then roast, without stirring, until the edges are crispy and the stems are crisp tender, about 20 minutes.</ul>
      <ul>Step 3- Serve warm.</ul>
    </ol>);
  },

}
}
export default recipes;