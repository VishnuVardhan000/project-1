const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableresult');
var upd;
form.addEventListener('submit',(v)=>{
    v.preventDefault();

    const ctype = form.elements.coinType.value;

     fetchprice(ctype);
     if(upd){
     clearTimeout(upd);
    }


});
const fetchprice =  async(ctype)=>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target ="INR";
    


    res.innerHTML=`<tr style="background-color:lightpink;font-weight:bold;">
    <td >
       property
    </td>
    <td>
      value
    </td>
 </tr>
 <tr>
    <td>
    ${base}
    </td>
    <td>
   ${price} ${target}
    </td>
</tr>
<tr>
    <td>
       volume
    </td>
    <td>
      ${volume}
    </td>
 </tr>
 <tr>
    <td>
   change
    </td>
    <td>
   ${change}
    </td>
</tr>

 `;

 upd=setTimeout(()=>fetchprice(ctype),10000);
}
