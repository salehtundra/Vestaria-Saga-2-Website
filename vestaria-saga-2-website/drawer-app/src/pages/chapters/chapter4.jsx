import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter4 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 4"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
            Your conditions on this map are as follows:<br/>
            <span class="greentext">Victory: All refugees make it to safety, all refugees are safe till turn 21</span><br/>
            <span class="redtext">Defeat: Zade dies, Roleck dies, A single refugees dies</span><br/><br/>
            Note: You absolutely cannot let the enemy even touch the refugees. They are very frail and die easily so you will need to create a blockade on the road to protect them. This chapter throws new allies at you and gives you a lot of green ally units already blocking the road so it is actually very easy to protect them.<br/><br/>
            Also this is the first map you get access to the preparations screen. You can only choose 6 other units to field along with Zade. I strongly recommend fielding Drake and one of the two sailors you captured last chapter.<br/><br/>
            The following is what the chapter looks like on Turn 1:<br/>
        </p>
        <img src="./screenshots/chapter4map.png" alt="Chapter Map" />
        <p>
          I went through and marked everything of interest on the map as shown here:<br/>
        </p>
        <img src="./screenshots/chapter4data.png" alt="Chapter Data" />
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Oh wow does the list of units you have available to you grow from this chapter. Everyone new to this game.
        </p>
        <Character charname="Jonathan" chartype="ally">
          <p>He is your stockpile wagon and can find herbs at random. He cannot fight and is similar to promoted Merlinus from Fire Emblem 7. He is available if you talked to him on the previous chapter. Anytime you want to buy from a shop or buy from the preparations menu use him as he makes the prices 25% cheaper. He can also randomly find Herbs at the start of a turn.</p>
        </Character>
        <Character charname="Nelke" chartype="ally">
          <p>A competent healer with a personal staff <Item itemtype={itemtypes[1]}>Nelke's Staff*</Item>. I used Karajon over her this chapter. She is available if you talked to Baymonk on the previous chapter. Her personal staff is very good however as it has up to 5 range and allows a unit to move again. So she is kind of a long range dancer from fire emblem albeit with limited uses.</p>
        </Character>
        <Character charname="Bennette" chartype="ally">
          <p>If you have played Fire Emblem Thracia 776 she is very similar to Ronan. She is an archer you get on turn 1 who can heal but most importantly she has a chance to level up movement on level ups and get a second turn sometimes at random. The English version of this game effectively has save states and you can abuse it to get the level ups you want... so you can really make her busted movement wise if you are patient.</p>
        </Character>
        <Character charname="Lucion" chartype="ally">
          <p>An armor knight with decent defense you get on turn 3.</p>
        </Character>
        <Character charname="Phoeve" chartype="ally">
          <p>A mage with a strong personal tome <Item itemtype={itemtypes[1]}>Phylarsk*</Item> with a 2x hit effect. She seems better than Accorte and has more levels available to her to gain stat points.</p>
        </Character>
        <Character charname="Abrahm" chartype="ally">
          <p>An advanced class Grand Guard with decent defense. He will be very useful on upcoming defense objective chapters.</p>
        </Character>
        <Character charname="Claude" chartype="ally">
          <p>An armor knight with decent defense you get on turn 6.</p>
        </Character>
        <Character charname="Alexander" chartype="ally">
          <p>A lance knight who shows up on turn 12, you need to talk to him or Hestion with Zade to recruit both. He starts of very weak and underwhelming along for a cavalry unit.</p>
        </Character>
        <Character charname="Hestion" chartype="ally">
          <p>A knight who shows up on turn 12, you need to talk to him or Alexander with Zade to recruit both. He starts of very weak and underwhelming along for a cavalry unit.</p>
        </Character>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          On turn 12 Alexander and Hestion show up and will attack anyone within their range the moment they arrive (ambush spawn). You want Zade to talk with either one of them and both of them will be recruited.
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
      <ul>
          <li>The village furthest to the left gives a <Item itemtype={itemtypes[0]}>hammer</Item> and has a refugee spawn.
            <img src="./screenshots/item4-1.png" alt="Treasure 1" />
          </li>
          <li>The treasure chest which you need to open with Drake yields a <Item itemtype={itemtypes[0]}>Gold Bullion</Item>.</li>
          <li>The flower on the cliff yields a <Item itemtype={itemtypes[2]}>Liquid Vitality</Item>.
            <img src="./screenshots/item4-2.png" alt="Treasure 2" />
          </li>
          <li>You need one of the two sailors or both to head to the island and examine the ore to get a <Item itemtype={itemtypes[2]}>Siurian Thaunite</Item>. As soon as you examine it Hedskinn will show up from the volcano. He is technically the only boss enemy on this map. The sailors will have trouble dealing with him so it is best to have healing items on them and back off to Drake.
            <img src="./screenshots/item4-3.png" alt="Treasure 3" />
          </li>
          <li>The house on the top right corner has a <Item itemtype={itemtypes[2]}>Lurk Tome</Item> skill book. Make sure to pick this up.
            <img src="./screenshots/item4-4.png" alt="Treasure 4" />
          </li>           
        </ul>
        <p>The following lists all the item drops enemies yield in this chapter:</p>
        <br/>
        <p>Hedskinn arrives very shortly and tries to take the ore on the island. He drops a <Item itemtype={itemtypes[2]}>Golden Axe</Item> on defeat.</p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>The green unit Roleck will initiate a lot of these events on certain turns when he talks to the person listed in the event.</p>
        <ul>
          <li>Roleck will talk with Bernette and she becomes an ally at the start of turn 1.</li>
          <li>Roleck will talk with Lucion and he becomes an ally at the start of turn 3.</li>
          <li>Pheove and Abrahm become allies at the start of turn 4 after she gets some refugees out of the northern houses.</li>
          <li>Roleck will talk with Claude and he becomes an ally at the start of turn 6.</li>
          <li>Alexander and Hestion will show up in the cavalry spawn zone and attack anyone nearby. Zade can talk to either of them to recruit both of them.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>Soldiers and archers will spawn in the top right of the map every few turns.</li>
          <li>Archers and knights will spawn in the middle right of the map every few turns.</li>
          <li>Hedskinn will spawn eventually or when you examine the ore with Porruck or Castore. He is pretty dangerous and they will have trouble dealing with him.</li>
          <li>A lot of cavalry units will spawn at the bottom right of the map once in a while.</li>
          <li>Starting on turn 14 Mountaineers will spawn from both caves in the top left of the map every turn so make sure you have people to defend the refugees up there.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Hedskinn" chartype="enemy"><p>Hedskinn shows up after a while or after you examine the ore. Luring him back to the mainland and having Drake fight him is the easiest method of taking him down. You get a <Item itemtype={itemtypes[2]}>Golden Axe</Item> which you can sell for your trouble.</p></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>This is the first chapter which gives you the option of picking your units. You can also rearrange their starting locations. I highly recommend either Porruck or Castore and Drake in your deployment to get all the treasure and putting Porruck on the top right slot for starting deployments so he can cross the sea and get to the ore on the island asap.</p>
        <p>Have Drake go for the treasure chest and the flower, then put him on a forest tile and watch the cavalry destroy themselves when attacking him. Since I gave him the Potential Tome he leveled up like crazy from this. Have the sailor gather the ore, spawn Hedskinn, then lure Headskinn back to Drake's range. Get Porruck or Castore and Drake out of there so they don't take out Alexander and Hestion when they show up.</p>
        <p>Meanwhile as you are doing this, I visited every house early on and had Zade move down to the bottom right for Alexander and Hestion, and everyone else up to the top right to hold the line with the green units. Lucion and Bennette are crucial in the beginning for blocking the enemies from reaching the road. Claude isn't too helpful once you get him as you should have all your units stopping the reinforcements. Ashram, Zayid and Baymonk or good for this. Do not bother going after the enemies guarding where they spawn from, they hit hard with long range weapons and can easily take out your units.</p>
        <p>You can strategically wait on spawning a refugee from a house to get extra experience from the reinforcements or to ensure you get all the treasure on the map first. However it will start to become very messy after turn 14 when everything is spawning at once in every location. If you spawned them immediately around turn 14 or 15 the map should end as the last refugee makes it to the signpost near the top left.</p>
        <p>I may have missed something due to spawning all my refugees immediately. Please let me know if that was the case. This chapter was very straightforward compared to the last one which is a little breather as the next one is going to be much trickier.</p>
      </SectionBody>

      <Footer />
    </div>          
    )
}

export default Chapter4