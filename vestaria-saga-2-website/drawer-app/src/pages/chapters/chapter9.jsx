import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter9 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 9"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: All Ironblood (Great Lancers) defeated or Baruke defeated</span><br/>
          <span class="redtext">Defeat: Zade dies</span><br/><br/>
          Note: You can only deploy some of Zade's forces and at least 4 of them will be stuck without much freedom of movement inside the fences (only if you deploy Bertoullia and Aslanne in the fully closed fences). Also most of them have had their inventories cleared so you want to resupply everyone with their former equipment or new equipment. Finally, Zade receives a <Item itemtype={itemtypes[2]}>Blessed Tincture</Item> which is an item anyone can use that gives the Deathless skill for 3 turns. It has 3 durability points.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter9map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter9data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>To get all the items it will require a bit of tricky enemy AI exploiting I will go over in the guide.</p>
        <ul>
          <li>
            Examining the shell on the beach yields <Item itemtype={itemtypes[2]}>Liquid Defense</Item>.
            <img src="./screenshots/chapter9item1.png" alt="Item 1" />
          </li>
          <li>
            Examining the flower in the middle of the field yields <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
            <img src="./screenshots/chapter9item2.png" alt="Item 2" />
          </li>
          <li>
            Examining the skeleton near the shipwreck yields a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>. Out of the three you obviously want to get this one the most.
            <img src="./screenshots/chapter9item3.png" alt="Item 3" />
          </li>
        </ul>
        <p>
          The following lists all the item drops enemies yield in this chapter:
        </p>
        <ul>
          <li>
            The top right Ironblood drops a <Item itemtype={itemtypes[2]}>Xyston</Item> on defeat.
          </li>
          <li>
            The bottom left sorcerer drops a <Item itemtype={itemtypes[2]}>Far-Healing Staff +1</Item> on defeat. He will come to you with the Ironbloods making it easy to get.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          After a few turns, every few consecutive group of turns Lance Knights with <Item itemtype={itemtypes[0]}>pilums</Item> will spawn and target the rightmost row of ally units in the fence. Make sure you have Bennette in there as a healer for the others and give her a healing item in case she gets hit a few times.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Baruke2" chartype="enemy">
          <p>Baruke shows up again. He is absolutely not worth fighting; however, you can easily do it with Aslanne if you give her Zade's <Item itemtype={itemtypes[2]}>Blessed Tincture</Item> (which he gets at the start of this chapter) and have her use it in the middle of the field so she does not take damage for 3 turns. It will nearly break her Doyenne or any other good weapon you want to use as he is quite tanky. Otherwise Baruke will rip her apart. Baruke is strong and hard to get to and there is virtually no reward for it as the final Ironblood gives about just as much exp as him for less effort.</p>
        </Character>
        <p>If you do beat him there is some special dialogue at the end.</p>
        <img src="./screenshots/chapter9strategy2.png" alt="Victory" />
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          First off put Alsanne in the rightmost fence during preparations so she can mount her eagle and leave it. Leaving only 5 units stuck in the rightmost fences. Second reequip all weapons and items you want on each character as a lot of them had their inventories emptied around chapter 7.<br/>
          This is a very easy chapter but a little tricky to get all 3 items. Each of the Ironbloods (Great Lancers with Xyston) will bolt for the fences however they do not have ranged weapons and they can't counterattack on player phase. If your mages personal weapons and archers are strong enough a lot of them can be picked off in 1-2 turns. However the map will end as soon as the final Ironblood is defeated.<br/>
          Take out most of the Ironbloods. Then take out the healing mages that come to you and leave one Ironblood alive but weakened. This will make him run back across the field to the boss so the mages behind the boss which do not move can heal him. Have Aslanne pick up all 3 items when it is safe to do so and get some exp countering the pilum lance knight reinforcements. You can also bait them by getting near their range then out of their range to mess with the AI and make it take longer for the Ironblood to get back like so:<br/>
          <img src="./screenshots/chapter9strategy.png" alt="Strategy" />
          I recommend going for the shell first with Aslanne, then the skeleton, then return for the flower when you weaken the Ironblood near death for the second time.<br/>
          Also I used Sujata to choke a point and got her some levels (finally) from this chapter. You can save scum to try to get her to level str and def as she really needs both. This is an excellent chapter for getting exp on your mages, archers, and Sujata. However you may need to use the personal weapons frequently to do so, except for Phoeve that is. The Ironbloods cannot counterattack even at one range on player phase.<br/>
          Note:<br/>
          Another guide in the steam community hub (a good one btw) mentions using the Blessed Tincture item you just received to end the map early. If you use the Blessed Tincture on Aslyanne or Bertoullia and send her out into the middle of the field it is a waste. She will get surrounded and be unable to go anywhere as the Ironbloods will still go for her even though they can't finish her off. If you want to go for Baruke you need to mostly clear the field of Ironbloods making going for him pointless in the long run anyway as the only real reward Baruke gives is massive Exp which the Ironbloods also give. Also this method would waste one usage of a pretty overpowered item for virtually no reward.<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter9