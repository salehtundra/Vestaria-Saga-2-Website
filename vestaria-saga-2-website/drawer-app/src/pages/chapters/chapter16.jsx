import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter16 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 16"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Northern ballista are destroyed</span><br/>
          <span class="redtext">Defeat: Bennette dies, 30 turns pass</span><br/><br/>    
          Baymonk, Drake, Ashram, Sujata, Jonathan, Porruck, Castore, Penneloupe, Ezrel, Bennette, and Karajan are deployed and you will not have access to preparations screen for this.<br/><br/>
          The enemy AI acts differently on this map. Each enemy group will try to run towards Conrad if you get close to each enemy group. If one of them reaches Conrad the entire enemy AI will change and all of them will try to rush you including the Sword Lion mercs.<br/><br/>
          Note that there is a 30 turn limit to beat this chapter but there is also a 20 turn limit to reach the north section with Bennette to keep Phoeve and Senah in your party. This second turn limit condition only occurs if Fauve was alive in your army before this chapter, since a specific story scene was triggered between Bennette, Phoeve, and Fauve.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter16map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter16data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          At a certain point you can have Porruck talk to Karajan for character dialogue and a permanent +2 Resistance for Porruck.
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            There is an Azure Paddock in the bottom right for temporary stat boosts.
          </li>
          <li>
            There is a weapon shop with decent weapons. Hopefully you gave the haggler skill book to a unit before this map.
          </li>
          <li>
            There are two item shops. The left one only sells <Item itemtype={itemtypes[2]}>Impertus staff</Item> for 3000 Denari (with haggle) which is a less durable version of <Item itemtype={itemtypes[1]}>Nelke's Staff*</Item> however it only works at one space range. I bought one for each staff unit on my run to simplify the next chapters.
          </li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            The bottom right house gives you an <Item itemtype={itemtypes[0]}>Elixir</Item>.
          </li>
          <li>
            The top right house gives you <Item itemtype={itemtypes[2]}>Liquid Magic</Item>.
          </li>
          <li>
            The bottom left chest contains a <Item itemtype={itemtypes[2]}>Flame Axe</Item>. Drake will need to slowly cross the mountains to get it.
          </li>
        </ul>
        <p class="text-small">
          The following is the list of enemy drops on this chapter:
        </p>
        <ul>
          <li>
            The guard who let Jonathan into Roseport drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>. You can only reach him with a ranged unit and there is a moral aspect to doing this as the guard will state.
          </li>
          <li>
            One of the Roseport Merc enemies drops an <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item>.
          </li>
        </ul>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            After the first turn, Jonathan's caravan will be attacked. Phoeve and Senah will be taken captive in the top middle red house on the map. You need to get to that house with Bennette before turn 20 to get them back. Senah is provides the rare shop in the preparations menu on specific chapters.
            <img src="./screenshots/chapter16event1.png" alt="Event 1" /><br/>
          </li>
          <li>
            At the start of Turn 3 Bennette appears from the forest and you have control of her.
          </li>
          <li>
            You can buy <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item> for 3200 Denari from this house as a one time deal.
          </li>
          <li>
            If you enter the top middle house with Bennette a scene will begin and you will be able to get Phoeve and Senah back after it plays. Phoeve will not be deployed on this map though.
            <img src="./screenshots/chapter16event2.png" alt="Event 2" /><br/>
          </li>
          <li>
            If you can beat Conrad and then enter this house the Power of Love status will be put on whoever entered the house. This makes it easy for either Porruck or Castore to approach the corner ballista strategically.
          </li>                    
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Long range sorcerers, one with paralysis strike, will spawn every turn from the two fortresses near Conrad after Conrad is alerted by one of the enemy groups.
          </li>
          <li>
            Assassins with <Item itemtype={itemtypes[0]}>Waguri</Item> spawn from the lighthouse every turn after a while.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Conrad" chartype="enemy">
          <p>A pretty strong unit who will move if you get in his range. His weapons are strong. Penneloupe can take him out somewhat reliably but it is unnecessary to do so. He leaves after being brought to 1HP as he has the Deathless skill.</p>
        </Character>
        <Character charname="Roseport Merc" chartype="enemy">
          <p>A bunch of generic Sword Lions each with different weapons, portraits and consumables. One of them drops an <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item>.</p>
        </Character>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          There are two ways to do this chapter: a fast harder way or a slow easier way. In both versions you should split your party into two groups because of the turn limit. The bulkier stronger units to the south and the archers, mages, and sailors to the north.<br/><br/>
          For the slow easier way: stay out of enemy range as long as possible then one round them to ensure no one reaches Conrad and warns him which prevents the long range mages from spawning. You can also pick off everyone at a time and work your way to the ballista. You do not need to bother with the center and deal with Conrad or the Sword Lions who are pretty dangerous using this method.<br/><br/>
          For the fast harder way: let the archer get to Conrad and this will trigger every enemy to try to rush you. The Sword Lions will most likely attack the southern group of allies. If Baymonk, Drake and Ashram can tank them like mine could you can do that. Otherwise try to defeat them on enemy phase. One will go Berserk and help you out. The only real issue here is the paralysis strike mages hitting units you need to defeat Sword Lion mercs with.<br/><br/>
          Avoid Conrad's range, he will move to attack if a unit is put in range and he is deadly. Focus on the ballista in the north above all else since that is the win condition. Also pick up some Impetus Staves from the far left shop to make future chapters much easier. I had Ashram buy them since I gave him the Haggle skill. You can actually beat Conrad if you get him to one HP which triggers a scene and makes it easy to approach the top left ballista by visiting the top left house.<br/>
          <img src="./screenshots/chapter16event3.png" alt="Event 3" /><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>       
    )
}

export default Chapter16