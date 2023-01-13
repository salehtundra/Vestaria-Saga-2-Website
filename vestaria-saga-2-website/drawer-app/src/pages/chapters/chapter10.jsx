import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter10 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 10"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Zade seizes fort</span><br/>
          <span class="redtext">Defeat: Zade dies</span><br/><br/>
          Note: You lose all the units right of Zade on turn 1 and they do not get access to the stockpile. You do not get a choice of which units get deployed. Also this map has a lot of moral choices in it.<br/><br/>
          THIS CHAPTER IS REALLY GOOD FOR GRINDING LEVELS.<br/><br/>
          **WARNING** The beginning of the next chapter is a nasty trap as it immediately screws you over if you don't know what is going to happen (which you won't know about on a first playthrough). Make sure Karajan has a way to cure Berserk status on Sujata, like his <Item itemtype={itemtypes[2]}>waking staff*</Item>, and make sure Zayid has a healing item as well as Sheela. If you don't do this you are going to be very angry at the start of next chapter. Also if you have Sujata equipped with the <Item itemtype={itemtypes[1]}>prayer knife*</Item> I would recommend switching that to darts. Otherwise make sure the <Item itemtype={itemtypes[1]}>prayer knife*</Item> has more than 2 durability if you don't want to lose it.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter10map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter10data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Capturable Units
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          You can capture Geoffried* and get his <Item itemtype={itemtypes[2]}>Dreizack</Item>. He will not become a member of your army if you do that but he will show up again in the future as an ally.
          <img src="./screenshots/chapter10event.png" alt="Geoffried" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Castore can talk to Porruck for a scene and it gives them both +1 to mobility.
          </li>
          <li>
            Zade can talk to Serena when she spawns to trigger an event.
          </li>
          <li>
            Zade can talk to Lazeia after he talks to Serena to trigger an event.
          </li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            There is a weapon shop in the top right which sells basic weapons.
          </li>
          <li>
            There is an Azure Paddock tavern to give a character buffs.
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
            Examining the flower in the pond will yield <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
          </li>
          <li>
            Destroying the nugget next to the gargoyles will drop a <Item itemtype={itemtypes[2]}>Gold Bullion</Item>.
          </li>
        </ul>        
        <p class="text-small">
          The following drops are in this chapter:
        </p>
        <ul>
          <li>
            A soldier drops a <Item itemtype={itemtypes[0]}>pitchfork</Item> on defeat.
          </li>
          <li>
            One or two items drop from each of the barracks you destroy. I didn't keep track of them but there are things like swords, axes, lances, and tomes you can get. It is worth breaking every barrack and getting every item. Each barrack also spawns a soldier when it is destroyed.
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
            At the start of the turn you lose Nelke, Karajan, Haldyn, Ashram, Sujata, Sheela, Zayid, Ezrel, and Drake. They will be in an annoying state on the next chapter so make sure they are well equipped.
          </li>
          <li>
            Capture Geoffried for his weapon.
          </li>
          <li>
            When you enter the section past the first row of posts Lazeria and Serena will spawn. Lazeria will spawn where Vaughes was and Vaughes will move over one. Serena will spawn to the right of Vaughes.
            <img src="./screenshots/chapter10event3.png" alt="Event 3" /><br/>
          </li>
          <li>
            Serena wanders around. She is a small girl and no one in their right mind will attack her so talk to her with Zade. Lazeria will no longer be a threat after the cutscene.
            <img src="./screenshots/chapter10event2.png" alt="Event 2" /><br/>
          </li>
          <li>
            When you defeat Vaughes you are given a choice whether or not to spare him. He is a man of honor so this is a moral choice. If you choose to kill him chapter 18 will become quite harder.
            <img src="./screenshots/chapter10event4.png" alt="Event 4" /><br/>
          </li>
          <li>
            Talk to Lazeria with Zade to resolve all things that happened on this chapter peacefully. Also it will cause one chapter to become harder much later.
            <img src="./screenshots/chapter10event5.png" alt="Event 5" /><br/>
          </li>                                        
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Vaughes" chartype="enemy">
          <p>He is actually one of the first difficult boss fights you will have provided you avoided Baruke on the previous chapter. After you get far on the map enough he will trigger and go after your army. Not many units can deal with him as he is tanky with a weapon that halves damage. You basically need everyone to gang up on him to weaken him.</p>
        </Character>
        <Character charname="Lazeria" chartype="enemy">
          <p>As a Giga Ballista is brutal however most of your units can move around her range. She has high accuracy, high range, and does massive damage. However her daughter moves around the map and if you talk to her with Zade an event will play out and Lazeria will no longer fire the ballista at your units.</p>
        </Character>             
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This is a fantastic chapter to power level some units who are lagging behind. Every enemy except the two bosses are pretty easy to manage. The posts and barracks yield a ton of experience. There is no pressure to do this map fast and no reinforcements.<br/><br/>
          Use any unit who is lagging behind and have them attack the posts and warehouses. When Lazeria spawns stay out of her range with Zade and circle around into the middle of the map. I focused on leveling up Orphellia, Castore, Porruck, and Barzelphen from this maps enemies and structures. I personally spent tons of turns having Barzelphen hit the same post with his rusty axe until it almost broke just to get lots of money and levels from it. I wouldn't recommend that but it is nice since that axe is mostly useless with Barzlephen's <Item itemtype={itemtypes[2]}>Axe of Love*</Item> having effectively a similar skill but doing more damage.<br/><br/>
          Vaughes is the tough fight here. Group up on him with everyone you can and hit hard. Have Zade finish him off and then you can decide what to do in the cutscene. Finish the map by having Zade talk to Lazeria once you have gotten all the exp you can.<br/><br/>
          This is a nice breather before the garbage that is the next chapter...<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>       
    )
}

export default Chapter10