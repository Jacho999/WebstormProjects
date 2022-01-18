let clothes = new Set();//new poniewaz powstaje nowy obiekt
clothes .add('sweter');
clothes.add('kalesony');
//clothes .delete("sweter")
//alert(clothes.has("sweter"))
//alert(clothes.size)
//alert(clothes.value)
clothes.add("sweter") //robi nic.
for(let item of clothes) alert(item);

