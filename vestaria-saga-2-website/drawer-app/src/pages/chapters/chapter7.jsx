import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter7 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 7"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Last for 15 turns or defeat Paulos</span><br/>
          <span class="redtext">Defeat: Roleck dies</span><br/><br/>
          Note: Hilda has left before this map permanently. You do not have a good chunk of your army and your cavalry units will leave at the beginning of turn 1. Everyone deployed is a forced deploy. You have no ability to move their starting positions or choose different units.<br/>
          **WARNING** If Amlute and Laffine are still alive, all cavalry units leave for chapter 7x before the first turn of this map. You want to ensure you give them each good weapons, multiple weapons, and healing items as you won't have access to the stockpile or a healer in chapter 7x.<br/>
          This map is the defense version of the siege map from the previous chapter with some changes and expansion. You technically only need to last 15 turns and not try to be aggressive. However pushing aggressively early on makes the later half of this map easier.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter7map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter7data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
        The chapter has shops in the same locations as the previous chapter.
        </p>
        <ul>
          <li>
            The weapon shop has some basic weapons. I recommend getting the <Item itemtype={itemtypes[0]}>pilum +1</Item>.
          </li>
          <li>
            You can get buffs on a unit for 200 Denari.
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
            The bottom chest contains a <Item itemtype={itemtypes[0]}>Heavy Pilum</Item>.
          </li>
          <li>
            The middle chest contains a <Item itemtype={itemtypes[0]}>Tisane</Item>.
          </li>
          <li>
            The top left chest contains a <Item itemtype={itemtypes[0]}>Healing Staff</Item>.
          </li>
          <li>
            The top right chest contains a <Item itemtype={itemtypes[2]}>Wooden Sword</Item>.
          </li>
        </ul>
        <img src="./screenshots/chapter7items.png" alt="Treasure" />
        <p>
          The following drops are in this chapter:
        </p>
        <ul>
          <li>
            A sorcerer drops a <Item itemtype={itemtypes[2]}>Far-Healing Staff +2</Item> on defeat.
          </li>
          <li>
            If you can beat Paulos you can get a strong <Item itemtype={itemtypes[2]}>Adept Sword</Item>. Phoeve is best for doing this. You also instantly end the map if you can pull this off.
          </li>
        </ul>
        <img src="./screenshots/chapter7win.png" alt="Victory" />

      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            If you have Laffine and Amlute still alive in your party your cavalry units will disappear for the full duration of this map. This is a good thing as it unlocks the secret 7-x chapter map right after this.
          </li>
          <li>
            The two wagons will setup locations to become ballista. One of them is on the cliff with stairs above the starting ballista. The second wagon will try to camp somewhere near the south. You want to destroy the south one if you can, the north one will probably setup itself before you can get to it. This makes trying to camp in the throne room and wait out the chapter more difficult.
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
            Some thieves will spawn from the hole in the ground inside your fortress. An assassin will spawn around turn 14 from that hole
          </li>
          <li>
            Archers and some Phalanx will spawn from the woods to the far right of the map.
          </li>
          <li>
            Cavalry units, mostly great lancers with cavalry lances, will spawn behind the ballista.
          </li>          
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Samson" chartype="enemy"><p>A tanky enough Grand Guard who opens the front gate. Buffs himself with <Item itemtype={itemtypes[0]}>Royal Jelly</Item> frequently. His weapon will bring you to 1HP and there is an archer next to him which can do the same so you will want to take both out on player phase without them performing a counter attack.</p></Character>
        <Character charname="Ulban" chartype="enemy"><p>Watch out for his <Item itemtype={itemtypes[2]}>lullaby knife</Item> which can put one of your units to sleep. He will flee to the south entrance for some reason if he deals with units too strong for him to feasibly take on and the south entrance is clear. His most dangerous trait is that he frequently gets 2 turns on enemy phase thanks to his skill.</p></Character>
        <Character charname="Vederal" chartype="enemy"><p>Starts next to Paulos but moves towards the southern siege group; he is a swordmaster with a high crit rate. The only danger with him is the other units he will be grouped up with. You want to take him out on player phase but reaching him before he reaches you can be tricky.</p></Character>
        <Character charname="Paulos" chartype="enemy"><p>If you can make it to him and take him out you win the chapter early. He is decently strong. Phoeve's personal weapon destroys him effortlessly so she is the best unit you have for dealing with him.</p></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>
          This chapter is very tricky to get all items and keep everyone safe and alive.<br/>
          The easiest strategy is to move everyone to the throne room and choke point at the staircase with Phoeve, Roleck, and Abrahm. Wait out the 15 turns this way although you won't get everything. The challenge for this strategy comes from the ballista which camps out near the top of the map and is in range of half the throne room. The ballista hit very hard so you would need your tankiest units in range and heal them frequently.<br/>
          There is a better strategy to try to obtain everything and get the <Item itemtype={itemtypes[2]}>Adept Sword</Item> (and end the map earlier). This requires setting up multiple choke points and getting a little lucky with Bennette's skill that gives a second turn (which you can actually save scum in the English version to ensure every-time it is needed).<br/>
          First off I would suggest fixing Drake's personal weapon if it is low on durabilty with a <Item itemtype={itemtypes[2]}>Siurian Thaumite</Item>. I did not do this and regretted it as it would have made this chapter a lot easier. Have him take on a few of the thieves which spawn in the hole in the fortress then have him go for the treasure. After he gets the treasure he can go to the right side of the map and clear up everything that builds up in the right hallway.<br/>
          The right hallway can easily be blocked by Lucion even if you have barely used him. He is tanky enough that Ulban can't do too much damage to him and the enemies without 2 range get stuck in the hallway and aren't able to reach Lucion. Have Ulban break his <Item itemtype={itemtypes[2]}>lullaby knife</Item> on Lucion. You can pick enemies off with 2 range attack weapons such as from Castore, Porruck, Bertoullia, Claude, and Barzelphen. If you don't have 2 range attack weapons you can buy them at the store here.<br/>
          Example:<br/>
          <img src="./screenshots/chapter7strategy1.png" alt="Strategy" />
          Use a unit too weak that you do not feel you need to level up to buy any items from the shop that other units need and he can ferry them to other units. You can have Roleck choke the thief spawnpoint however he will consistently get hit by the ballista and possibly get paralysed by the long range mage. Keep Kajaran in the middle healing everyone with long range staves. If you haven't captured him in chapter 3 this is where the game gets nightmarishly difficult as the manual states.<br/>
          By far, the hardest part of this map is dealing with the southern entrance. Roleck and a few other units like Barzelphen and the sailors can be helpful in the south if you want to use someone else to deal with the thieves. I had a strong enough Baymonk, Bennette, Phoeve, and Abrahm to do this however admittedly I did rely on a few random two turns in one with Bennette. The archbow at the weapon shop really helps her dominate this chapter as well. You want to bait out certain enemies so that on enemy phase the nasty ones with 1HP weapons, Vederal, and the long range sorcerers don't destroy your units. You have to switch out between Baymonk and Abrahm choking the point then keep healing with Karajan. Phoeve and Bennette are great for dealing with the dangerous enemies however they will most likely get silenced from a really obnoxious sorcerer in the south.<br/>
          After you clear out the southern entrance move west and have Bennette and Phoeve take out the majority of things on player phase. Avoid enemy phase hits as much as possible unless you have healing items on you since you will be running low on turns to get to Paulos. Try to stay out of the ballista's range until you can get Phoeve safely close enough to Paulos. Once you beat him the map immediately ends and you get the very strong <Item itemtype={itemtypes[2]}>Adept Sword</Item>.<br/>
          If you do everything well enough your later turns 12+ could look like this:<br/>
          <img src="./screenshots/chapter7turn11upper.png" alt="Turn 11" />
          <img src="./screenshots/chapter7trun11lower.png" alt="Turn 11" />
        </p>
      </SectionBody>

      <Footer />
    </div>             
    )
}

export default Chapter7