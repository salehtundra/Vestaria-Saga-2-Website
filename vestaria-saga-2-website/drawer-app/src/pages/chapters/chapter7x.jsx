import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter7x = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 7x"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Destroy all 4 convoys (wagons)</span><br/>
          <span class="redtext">Defeat: Entire army dies, single convoy escapes</span><br/><br/>
          Note: You can only get this chapter if Amlute and Laffine were alive at the start of chapter 7. You do not have access to the stockpile, what everyone has on them they will use. There is NO healer on this map. I actually forgot to give them healing items so it is not required but makes this map a lot easier. You have to use Ouron, Amlute, Laffine, Alexander, and Hestion on this map.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter7xmap.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter7xdata.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Ouron" chartype="ally">
          <p>A weak ranger who has the ability to go up cliffs which will be necessary on this map. He also can perform the capture ability that normally only Zade can do. He is deployed with your other units at the very start of this map. He does not seem to be worth leveling up and using often.</p>
        </Character>
        <Character charname="Penneloupe" chartype="ally">
          <p>A pretty strong Elite Hunter who you can recruit from the village, one enemy with a portrait will try to attack the village and get destroyed in a cutscene. She comes with a personal weapon <Item itemtype={itemtypes[1]}>Fell Fury*</Item>.</p>
        </Character>
        <Character charname="Convoy Guard" chartype="ally">
          <p>Ok technically not a new recruit but I put capturable enemies in this section in the past. This is the first enemy you can capture who will not join your army as a deployable unit (however he is considered a part of your army story wise according to a funny little scene that plays when you capture him).</p>
        </Character>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            The flower in the top left yields <Item itemtype={itemtypes[0]}>Octavo Herbs</Item> upon examination.
          </li>
          <li>
            The house gives you <Item itemtype={itemtypes[2]}>Liquid Mobility</Item> when you visit it.
          </li>                   
        </ul>
        
        <p>
          The following drops are in this chapter:
        </p>
        <ul>
          <li>
            Bason drops a <Item itemtype={itemtypes[2]}>Cavalry Lance</Item> upon defeat.
          </li>
          <li>
            All 4 wagons (convoys) drops <Item itemtype={itemtypes[0]}>Munitions</Item> upon defeat. They only have 10HP and low defense so they are easy to one shot and give a ton of exp.
          </li>
          <li>
            A distance archer on the cliff drops his <Item itemtype={itemtypes[0]}>Arbalest</Item> on defeat.
          </li>
          <li>
            A javelin knight on the cliff drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> on defeat.
          </li>
          <li>
            A healer near the village drops a <Item itemtype={itemtypes[2]}>Raecryst</Item> on defeat.
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
            If you visit the village you can recruit Penneloupe who is a fantastic Elite Hunter.
          </li>
          <li>
            A single caravan cannot reach the signposts at the top of the map or it is game over.
          </li>
          <li>
            There is a Convoy Guard* you can capture. You do not actually recruit this generic to your team but you acquire his skill book <Item itemtype={itemtypes[2]}>Haggling for Fools</Item>. If you use this skill book on someone you no longer need to deploy/use Jonathan as the skill gives 25% discount for shopping. Use it on anyone who you deploy every map and would want to waste a turn at the shop with.
          </li>
        </ul>
        <img src="./screenshots/chapter7xevent.png" alt="Event" />
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          A Great Lancer and a Sniper Knight will spawn from the start of the map on the left side continuously for a while. They can mostly be outrun and ignored by your main army.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>There are barely any differences functionally between these 4 Great Lancers with <Item itemtype={itemtypes[2]}>Cavalry Lances</Item> except that Bason drops his on defeat. Laffine is somewhat dodgy enough to deal with them on a protective tile as well as Amlute chipping them away from a distance. They cannot counterattack on player phase due to the nature of the <Item itemtype={itemtypes[2]}>Cavalry Lance</Item> in this game however you cannot counterattack on enemy phase. Try to lure out 2 or 3 at a time and not tank more than 1 since almost everyone can get one shot by them if they hit. Or just ignore them if you don't want to save scum to avoid a death from rng.</p>
        <Character charname="Bason" chartype="enemy"></Character>
        <Character charname="Miller" chartype="enemy"></Character>
        <Character charname="Wyse" chartype="enemy"></Character>
        <Character charname="Rick" chartype="enemy"></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          The entire challenge of this map comes from the top left wagon group at the start. They have a swordmaster which can easily destroy Ouron, a Convoy Guard* you can capture with a valuable skill book, and they start two thirds of the way into the map ahead of you. While the convoys can only move 4 squares at a time and your cavalry can move roughly twice that it still takes a while to catch up. The second challenge of this map is the bosses in the top right corner who act as death to anyone but Laffine and Amlute (since they are dodgy).<br/>
          Hopefully you have decent weapons and healing items on everyone since you cannot shop, use the stockpile, or do preparations on this map. You were warned from a dialogue box in Chapter 7 about this. When you start this map have Amlute trade some lighter bow to Ouron so he can pick off certain enemies easier. Ouron should bum rush this map to the top middle area (just outside the 4 bosses range) as much as possible with his ability to scale cliffs. He also should visit the village to recruit Penneloupe to help him as she can also scale cliffs. You need both of them to take out the <Item itemtype={itemtypes[2]}>Chariot Bow</Item> archer which has a 3x hit effect bow to be able to take on that lookout vantage point.<br/>
          Now there is a neat trick to the AI on this map. The convoy surrounding enemies will not attack you on enemy phase (they will counterattack if attacked on player phase though) unless the convoy they are guarding is destroyed. Once it is destroyed they turn into normal enemy AI. You can exploit this by taking out the convoy last sometimes or removing the real threats of the convoy like the swordmaster and the other guards. They also will move slow to stay with the convoy.<br/>
          Use Penneloupe and Ouron to take out all the threats first, then the convoy. Leave the Convoy Guard* last to capture. He won't even attack, he will just try to leave as he will still have the convoy AI. It can be hard to recruit him before he tries to leave so I blocked the escape path with Penneloupe and Ouron so he can't do anything and just stands there. Ouron can easily weaken him to under 10HP with his starting weapon and then capture him for the <Item itemtype={itemtypes[2]}>Haggling for Fools</Item> skill book.<br/>
          If you did everything like I did the final turns of this map will look like this. Also just ignore the enemy reinforcements by rushing the map with your other units unless they catch up near the end.<br/>
        </p>
        <img src="./screenshots/chapter7xstrategy.png" alt="Strategy" />
        <p>
          Also if you have Amlute and Laffine near the top you can try to lure out the 4 bosses but if you get hit it will probably be death or close to death. I put Laffine in one of their range after saving to make sure she would not die. Also, I had Amlute as backup to take out two of the three that were baited by Laffine on player phase. Oddly 3 of the 4 were triggered and not all 4 for me. You may want to trade a healing item to Penneloupe before the end of the map to make one section in Chapter 11 not RNG dependent.<br/>
          If you are struggling for whatever reason on this map you can focus entirely on trying to take out the 4 wagons as soon as possible. Once the 4th one is taken out the chapter immediately ends. But it is hard to get 100% that way.<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>             
    )
}

export default Chapter7x