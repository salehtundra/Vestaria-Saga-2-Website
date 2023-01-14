import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter24 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 24"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Defeat Grevandel.</span><br/>
          <span class="redtext">Defeat: Zade dies, Any guest unit dies, <Item itemtype={itemtypes[1]}>Emmung*</Item> is lost (when you get it and before you beat the first phase of Grevandel).</span><br/>    
          I recommend deploying Sheela, Zayid, Penneloupe, Lucion, Claude, Phoeve, Lilia, and Laffine to get all the support conversations and buffs from them. However, By doing this some of these units will not be able to go to chapter 25 and get unique gifts from the villages. So you have a choice of story and stat boosts or special items. Some of these characters you can view the support conversations of in chapter 25 instead of chapter 24 so it is better to deploy them in chapter 25 and risk losing a support conversation in this chapter.<br/><br/>
          The remaining deploys are up to you. You can buy some rare <Item itemtype={itemtypes[2]}>All-Healing Staves</Item> from Senah's store at the preparations of the map for all your healers. It is a good idea to do last minute stockpiling and filling everyone's inventories before starting this map.<br/><br/>
          Whoever you field on this map and whatever they have in their inventory will not be available on the next and final chapter so plan carefully. You may want to use a lot of your weaker units for this map since there are a lot of choke points and strategic ways of taking on the enemies in this chapter. The next one is a wide open field.<br/><br/>
          This map is pretty complex and reminiscent of the final map in the first game. Lots of levers open different doors and multiple teams of units will be doing tasks in parallel.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter24map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter24data.png" alt="Chapter Data" /><br/>
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
            Lucion can talk to Claude for some character story and a permanent +1 to res and luck stats for both of them.
          </li>
          <li>
            Sheela can talk to Zayid for some character story and a permanent +1 to luck stat for Sheela. Possibly more stats but my Sheela was capped out already on everything but luck and resistance.
          </li>
          <li>
            Sheela can talk to Penneloupe after talking to Zayid for some characer story and a permanent +1 to luck stat for Sheela. Again maybe more stats.
          </li>
          <li>
            Zayid can talk to Penneloupe after Sheela talks to her for some character story.
          </li>
          <li>
            Laffine can talk to Phoeve for some character story and a permanent +1 Str for Laffine and a permanent +1 Mag for Phoeve.
          </li>
          <li>
            Lilia can talk to Garlan when he is free for some character story.
          </li>
          <li>
            Lilia can talk to Tasha after talking to Garlan for some character story.
          </li>
          <li>
            Zade can talk to Garlan when is free to display the <Item itemtype={itemtypes[1]}>Emmung*</Item> sword vault and allow Zade to get <Item itemtype={itemtypes[1]}>Emmung*</Item>.
          </li>
          <li>
            Zade can talk to Zoy in the final section of the map vs phase two of Grevandel after he breaks <Item itemtype={itemtypes[1]}>Emmung*</Item>.
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
            There is a tavern for temporary stat boosts.
          </li>
          <li>
            There is a weapon shop that sells pretty good weapons.
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
            Examining the flower yields <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
          </li>
          <li>
            Examining the sword in the vault yields <Item itemtype={itemtypes[1]}>Emmung*</Item>.
          </li>
          <li>
            Talking to Zoy gives Zade the <Item itemtype={itemtypes[1]}>Silvanister*</Item>.
          </li>
        </ul>        
        <p class="text-small">
          The following is the list of enemy drops:
        </p>
        <ul>
          <li>
            A sphirian mage on the balcony drops an <Item itemtype={itemtypes[0]}>All-Healing staff</Item>.
          </li>
          <li>
            Tiradell drops a <Item itemtype={itemtypes[2]}>Strength Jolt</Item>.
          </li>
          <li>
            The healer near the boss door drops a <Item itemtype={itemtypes[2]}>Far-Healing Staff +2</Item>.
          </li>
          <li>
            A dullahan in the dungeon drops a <Item itemtype={itemtypes[0]}>Masudian Brand</Item>.
          </li>
          <li>
            A dullahan near Zade's starting location drops a <Item itemtype={itemtypes[2]}>Dragonslayer</Item>.
          </li>
          <li>
            A deadshot near the boss door drops a <Item itemtype={itemtypes[2]}>Seriatim Bow</Item>.
          </li>
          <li>
            Eldoss drops his <Item itemtype={itemtypes[0]}>Adept Sword</Item>.
          </li>
          <li>
            The male and female Bloodwyrm each drop <Item itemtype={itemtypes[2]}>Miracle Essence</Item> on defeat.
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
            Before turn 1 Troy, Prody, Bonacel, Emma, Tasha, and Garlan show up on the other side of the gate near Zade. They are guest units and cannot die on this chapter. You will need to free them to get <Item itemtype={itemtypes[1]}>Emmung*</Item>.
          </li>
          <li>
            The lever near the bottom of the prison hallway opens up the dungeon gate.
          </li>
          <li>
            The colored tiles near the reservoir teleport you to the dungeon.
          </li>
          <li>
            The lever just outside the dungeon destroys the nethergate which continuously spawns monsters. This stops the reinforcements from there.
          </li>
          <li>
            The rightmost lever nearest Zade opens the rightmost door at then end of the teleporter room.
          </li>
          <li>
            The leftmost lever nearest Zade opens the main door to the fortress for your outside troops.
          </li>
          <li>
            The bottom left lever near the dungeon opens the entrance to the fortress on the balcony.
          </li>
          <li>
            The leftmost lever furthest from Zade opens up a room at the end of the teleporter room.
          </li>
          <li>
            The lever in this room opens the room to a lever in the dungeon area.
          </li>
          <li>
            The rightmost lever furthest from Zade opens the leftmost room at the end of the teleporter room.
          </li>
          <li>
            The lever in this room opens the door to the reservoir room.
          </li>
          <li>
            The lever in the cell in the dungeon opens up the boss room.
          </li>
          <li>
            The lever in the rightmost room of the teleporter room opens the door to the dragons den.
          </li>
          <li>
            The lever near the treasure room removes the statue connecting the dungeon and the teleporter room.
          </li>
          <li>
            The lever near the door to the dragons den opens up another room at the end of the teleporter room.
          </li>
          <li>
            The lever in the reservoir room fills the room with water and removes the water from the teleporter room revealing a lever in between the three toxic dragons. Whoever opens that if they are not a flier or pirate will be stuck in that room. I used Zayid for this as his <Item itemtype={itemtypes[2]}>Flame Axe</Item> was able to defeat the two statues next to the lever he was stuck with.
          </li>
          <li>
            The lever in the dragon's den opens up the prison hallway freeing Garlan and the others but also frees all the thief fighters at the top of the screen. Have units like Claude and Lucion ready to block those doors.
          </li>
          <li>
            The newly revealed lever in the teleporter room unlocks the door to the treasure room.
          </li>
          <li>
            The last lever in line of rooms near the teleporter room unlocks the other entrance to the dragons den. The one that connects to the dungeon.
          </li>
          <li>
            When Garlan is free, have Zade talk to him to reveal the location of <Item itemtype={itemtypes[1]}>Emmung*</Item>.
            <img src="./screenshots/chapter24event1.png" alt="Event 1" /><br/>
          </li>
          <li>
            After you defeat Grevandel for the first time enter the stairs with Zade to do the second phase of the fight. He will spawn some gargoyles when you enter.
            <img src="./screenshots/chapter24event2.png" alt="Event 2" /><br/>
          </li>
          <li>
            After breaking <Item itemtype={itemtypes[1]}>Emmung*</Item> on the gargoyles talk to Zoy to get <Item itemtype={itemtypes[1]}>Silvanister*</Item>. Don't bother attacking Grevandel as his weapon nullifies <Item itemtype={itemtypes[1]}>Emmung*'s</Item> attacks.
            <img src="./screenshots/zoy.png" alt="Zoy" /><br/>
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
            Bone soldiers will arrive on the first turn in the jail cell. Grenvandel will also spawn them in his chamber as you remove the ones already present.
          </li>
          <li>
            Every once in a while a group of 5 monsters will spawn in the jail cell. You need to use the last bit of weapon durability you have on Troy, Bonacel, and Prody to deal with them creating a sort of turn count down.
          </li>
          <li>
            The statue near the center of the map spawns a different monster every turn until you press the lever that destroys it.
          </li>
          <li>
            The second phase of Grevandel will spawn some Gargoyles. Break <Item itemtype={itemtypes[1]}>Emmung*</Item> on these.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Valerius2" chartype="enemy">
          <p>Appears again in this chapter only to leave before it starts without fighting him. Disappointing.</p>
        </Character>
        <Character charname="Tiradell" chartype="enemy">
          <p>The little kid portrait is not what he really looks like. He is easy to take down but the danger is one of the thief fighters next to him with a drop to 1HP effect knife. Make sure to take that thief out before he gets a chance to hit so Tiradell isn't as much of a threat.</p>
        </Character>
        <Character charname="Nafca" chartype="enemy">
          <p>Easy to deal with using a strong ranged unit like Sheela, Penneloupe, or Phoeve. A unit will step on the teleporter at 2 range from him showing you how they work and making that tile safe to fight on.</p>
        </Character>
        <Character charname="Nayle" chartype="enemy">
          <p>Can be defeated trivially with Zade.</p>
        </Character>
        <Character charname="Mosqra" chartype="enemy">
          <p>He is a little annoying since he can attack at long range. Deal with him by using a heavy hitter on the next turn you warp him or her into the dungeon.</p>
        </Character>
        <Character charname="Zagan" chartype="enemy">
          <p>Easily dealt with via an archer. He can be dangerous otherwise.</p>
        </Character>
        <Character charname="Broodwitch2" chartype="enemy">
          <p>She can be taken out by Lilia since Lilia has the First Strike skill as well. Otherwise she will nullify anyone who attacks her.</p>
        </Character>
        <Character charname="Voxevald" chartype="enemy">
          <p>Zade can reach him and beat him easily with a little bit of long range healing because of the long range pot shots Grevandel will do to him. Voxevald doesn't seem to move so he can't fight back at 1 range.</p>
        </Character>
        <Character charname="Eldoss" chartype="enemy">
          <p>A strong magic user can take him out easily.</p>
        </Character>
        <Character charname="Grevandel" chartype="enemy">
          <p>Getting to him and fighting him can be tricky. Get <Item itemtype={itemtypes[1]}>Emmung*</Item> from the treasure room for Zade. Then have Zade attack Grevandel with a full durability <Item itemtype={itemtypes[1]}>Emmung*</Item> (don't use it on anything else). This creates the final battle.</p>
        </Character>
        <Character charname="Grevandel2" chartype="enemy">
          <p>You can enter the room but be prepared to fight a bunch of gargoyles with the second phase. Once <Item itemtype={itemtypes[1]}>Emmung*</Item> breaks in the second room off gargoyles Zoy arrives and you can get <Item itemtype={itemtypes[1]}>Silvanister*</Item> from talking to him. Then have Zade attack with <Item itemtype={itemtypes[1]}>Silvanister*</Item>. Use <Item itemtype={itemtypes[2]}>All-Healing Staves</Item> when necessary from your healers.</p>
        </Character>   
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter is somewhat complex however it is surprisingly straightforward when you play it. There are a lot of levers but you mostly only have access to a few at a time so you linearly open doors, pull levers, and work with four parallel groups focusing on their individual tasks. For these groups though first you must choose who to field. Whoever you field cannot be used on the final battle so choose carefully.<br/><br/>
          I chose to field Zayid, Penneloupe, Sheela, Phoeve, Lilia, and Laffine in the bottom section. I chose to field Ouron with Zade and Jonathon in the top section. I chose to field Nelke, Abrahm, Claude, Lucion, Baymonk, and Ezrel in the outside section. Keep in mind you need to fend off a bunch of reinforcements with whatever Troy, Prody, and Bonacel have on them from the previous chapter. So you may need to work fast depending on what stuff they have remaining in their inventories.<br/><br/>
          Make sure to use up whatever items you need such as stat boosters or repair personal weapons.<br/><br/>
          Also buy some All-Healing staves for all your staff users from Senah's store. They trivialize the final two chapters. The entire difficulty of this chapter comes primarily from who you choose to field in each section.<br/><br/>
          Archers and mages are good for the dragons and enemies in the teleporter and dungeon rooms. Don't teleport everyone to the dungeon, keep a defensive archer or resistant mage around for pulling the levers and tanking the unbreakable nethergate wall monsters who defend the levers and each use different types of attacks. Whoever crosses the reservoir room to the lever on the other side will be stuck there between the two statues unless they are a flier. Zayid with a <Item itemtype={itemtypes[2]}>Flame Axe</Item> could destroy the two statues so I chose him. He was stuck in that room for the rest of the map.<br/><br/>
          Tanky units with some ranged support are good for the outside section as you will be blocking a lot of choke points such as the initial onslaught of dark knights and thief fighters, and then the guards from the balcony later on. You may end up fighting both dragons with this party to so make sure they can handle that. Baymonk + Nelke staff were easily good enough for this on my run.<br/><br/>
          Zade was strong enough to solo the northern section so I didn't bother bringing anyone besides Ouron so he could hit the levers easily due to his high mobility. Have Zade talk to Garlan when you eventually free him to open up the vault for <Item itemtype={itemtypes[1]}>Emmung*</Item>. Then grab it and take on Grevandel with Zade using <Item itemtype={itemtypes[1]}>Emmung*</Item>. You might need to stat boost him with a staff user, food items, tavern, or Tasha's morale boost if he is weak at this point, I didn't though as he was strong enough to deal with Grevandel. On the second phase break <Item itemtype={itemtypes[1]}>Emmung*</Item> on the gargoyles don't even bother fighting Grevandel as no attack will land. Once you get <Item itemtype={itemtypes[1]}>Silvanister*</Item> by talking to Zoy (who appears after breaking <Item itemtype={itemtypes[1]}>Emmung*</Item>) you can effortlessly take out Grevandel's second phase.<br/><br/>
          Examine the statue with Zade and to see a scene end the map.<br/><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Softlock Warning
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          While you do not need to deploy any units outside the fortress to access the levers you need to access, you do need to deploy units at the teleporter room entrance. If you do not deploy anyone in the bottom right you cannot progress through this level.<br/><br/>
          Technically, there is another way to softlock this level but you have plan it out and actively try to softlock yourself. If you broke all your weapons from the farming dark knights and skeletons and used all the healing items and food buffs on the previous chapter and then proceeded to not bring any long range healing into this level, the guest units cannot defend themselves from the waves of enemies and may die before you can free them. Death of any of the guest units is a game over on this map.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter24