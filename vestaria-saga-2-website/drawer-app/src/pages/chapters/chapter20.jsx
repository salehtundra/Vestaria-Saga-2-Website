import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter20 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 20"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Defend for ? Turns.</span><br/>
          <span class="redtext">Defeat: Zade dies, Roswell Dies, Borte Dies.</span><br/>    
          Accorte, Zade, and Haldyn are force deployed on this map. I recommend your best units, then Sujata, Ashram, Lucion or Claude (the unpromoted one), someone with the haggler skill, Slayne, and Baymonk for this map. This is one of the hardest maps in the game so far and will require you to play very carefully. It is slightly easier if you have all your staff units on this map with Impertus staves so a lot of units can attack multiple times per turn.<br/><br/>
          Vaughes and Lazeria appear as allies if you spared them back in chapter 10.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter20map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter20data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Mia" chartype="ally">
          <p>She starts off useful because of her personal weapon the <Item itemtype={itemtypes[1]}>Miracle Hoe*</Item>. She is very low leveled and weak at the start but can gain a lot of levels on this map. She only appears in the top left of the map on turn 1 if Alexander and Hestion are alive.</p>
        </Character>
        <Character charname="Phoros2" chartype="ally">
          <p>He will appear on this chapter as a playable unit if you talked to him with Arielle in the previous chapter. Stat-wise and class-wise he is very similar to Baruke who you kept fighting earlier in the game.</p>
        </Character>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Zade can talk to Lazeria and Vaughes if you spared them on previous maps. This triggers them to escape.
          </li>
          <li>
            Accorte can talk to a lot of different NPCs. Look at the event section for this.
          </li>
          <li>
            Baymonk can talk to Ashram and restore 20 durability of Ashram's <Item itemtype={itemtypes[1]}>Bathoras*</Item> sword. So feel free to spam it in the early stages of the map.
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
            There is a few taverns on this map for buffs.
          </li>
          <li>
            The item shops have some valuable healing staves.
          </li>
          <li>
            The weapon shops have loads of good weapons. Buy some with Jonathan or anyone who has the haggler skill.
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
            The flower in the top left yields <Item itemtype={itemtypes[0]}>Tisane</Item> when examined.
          </li>
          <li>
            The chest in the top right yields <Item itemtype={itemtypes[0]}>5000 Denari</Item>.
          </li>
          <li>
            The house in the top right yields <Item itemtype={itemtypes[0]}>2000 Denari</Item>.
          </li>
          <li>
            The hat which spawns in the shopping center yields a <Item itemtype={itemtypes[2]}>Late Husband's Hat</Item> when examined.
          </li>
          <li>
            Keeping all the farmers in the top left alive yields the <Item itemtype={itemtypes[2]}>Cordean Accolade</Item> at the end of the chapter.
          </li>
          <li>
            Completing all side objectives and keeping the defenseless NPCs alive yields the <Item itemtype={itemtypes[2]}>People's Accolade</Item> at the end of the chapter.
          </li>
        </ul>
        <p class="text-small">
          Data Goes Here
        </p>
        <ul>
          <li>
            A guardian in the top left drops a <Item itemtype={itemtypes[0]}>Royal Lance +1</Item>.
          </li>
          <li>
            A soldier in the top left drops a <Item itemtype={itemtypes[0]}>Royal Lance</Item>.
          </li>
          <li>
            A dark knight in the top left drops a <Item itemtype={itemtypes[0]}>Tomahawk</Item>.
          </li>
          <li>
            A ballista parts wagon in the bottom right drops a <Item itemtype={itemtypes[0]}>Gold Bullion</Item>.
          </li>
          <li>
            A knight cavalry in the bottom right drops a <Item itemtype={itemtypes[2]}>Royal Brand</Item>.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events and Quests
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            You can visit the top left house to get a promotion for the other cavalry unit (Alexander or Hestion) who wasn't promoted before for 1500 Denari.
          </li>
          <li>
            You can visit the top middle house to get a promotion for the other guard unit (Claude or Lucion) who wasn't promoted before for 1500 Denari.
          </li>
          <li>
            Mia, Alexander, and Hestion will show up in the top left at the beginning of turn 1 if Alexander and Hestion are alive.
          </li>
          <li>
            The right lever opens to door to the capitol.
          </li>
          <li>
            The left left lowers the bridge on the south side of the city.
          </li>
          <li>
            The red house on the top left of the map will close a fence and lock everyone inside but block the western enemy army from reaching the top left area.
          </li>
          <li>
            On Turn 5 Valerius will appear as well as Ravinia. Ravinia will move toward your army.
          </li>
          <li>
            For the first 12 turns Borte will use her all-healing staff to heal every one of your units.
          </li>
          <li>
            On Turn 19 the battle ends and a scene plays out in the bottom right of the map.
          </li>
        </ul>
        <p class="text-small">
          There are a series of optional side objectives with Accorte you can perform to get an accolade at the end of the chapter. Each of these events are triggered by talking to one of the green defenseless npcs. Completing their individual objectives yield no reward. They all must flee to gain the accolade.
        </p>
        <ul>
          <li>
            Talking to the old woman will spawn a hat icon in the shopping center area. You can pick the <Item itemtype={itemtypes[2]}>Late Husband's Hat</Item> up with anyone by examining the hat icon with anyone but you must give the item to Accorte and she needs to speak to the old woman again and give it to her to finish the objective.
          </li>
          <li>
            Talking to the woman will cause Accorte to receive a small child. She needs to take the child to a signpost which spawns in the center right of the road to finish the objective.
          </li>
          <li>
            The woman south of the clock tower is injured and requires <Item itemtype={itemtypes[0]}>Herbs</Item> from Accorte. Once the woman is healed she will try to leave and the objective will be complete.
          </li>
          <li>
            The musician to the bottom left will trigger a cutscene event when Accorte talks to him, then the objective is complete.
          </li>
          <li>
            The old man on the top left will require 800 Denari and an additional 500 Denari to be motivated to escape the capital. Once he leaves near the signpost the objective is complete.
          </li>
          <li>
            The old man on the bottom right will require Accorte to pick him up. She will leave the map once she does this and complete the objective. Save this man for last because you will no longer be able to use Accorte after this.
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
            New enemies will spawn on the left side every turn replenishing the army as you try to take them down. The further towards the left you move your units the more overwhelmed you will get.
          </li>
          <li>
            The top left graveyard will spawn bone soldiers and sometimes margulian wraiths.
          </li>                   
        </ul>
        <p class="text-small">
          The final few waves of reinforcements will spawn Margulian Witches. It is best not to fight them as they have First Blood and a tome which causes them to trigger the stun status effect on your units with 100% certainty.
          <img src="./screenshots/margulian witch.png" alt="Margulian Witch" /><br/>
        </p>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Lagniel" chartype="enemy">
          <p>You don't have to fight him and there appears to be no incentive to actually fight him as the reinforcements will still keep spawning until the end. He will retreat when you lower his health but you cannot actually beat him.</p>
        </Character>
        <Character charname="Zecharias" chartype="enemy">
          <p>You cannot reach him on the bottom left side of the map due to an invisible wall, he leaves at the end.</p>
        </Character>
        <Character charname="Valerius" chartype="enemy">
          <p>You cannot reach him on the bottom left side of the map due to an invisible wall, he leaves at the end.</p>
        </Character>
        <Character charname="Ravinia" chartype="enemy">
          <p>You can recruit her by capturing her with Haldyn. If Haldyn is too high level he will beat her easily, so you can use Ashram with <Item itemtype={itemtypes[1]}>Bathoras*</Item> to give her the Power of Love status and make it easy to weaken her to below 10HP. Haldyn leaves for the remainder of the map after capturing her.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter is one of the hardest yet. Thieves with explosives will destroy the left wall of the castle. You must defend for 19 turns so you will want to use your tankiest units to block the left side of the castle walls. Being behind the castle wall holes helps make the enemies crowd around and get funneled reducing who gets attacked on enemy phase. You can take as many out as possible in one turn with Slayne and a lot of staff users but it requires some luck to hit the thieves as they are very dodgy.<br/><br/>
          The enemy groups which attack will be comprised of mages, archers, cavalry with hit and run tactics, and tanky grand guard so it is difficult to have few units which can tank the variety of hits you will be subjected to. The new and improved Sujata is really helpful here and can tank this side with ease. Capturing Ravinia can be tricky as you may put Ashram in danger but with Impertus staves and <Item itemtype={itemtypes[1]}>Nelke's Staff*</Item> it is far easier to move units around multiple times a turn as you need to. Have someone who can heal status effects to as the long range mages which spawn as reinforcements will constantly cause issues with this.<br/><br/>
          For the south side take them out with two really strong units but stay out of ballista range. I used Laffine and Penneloupe for this. Phoros should appear with some cavalry eventually to help out here and eventually distract the left side army. Do all the dialogue options with Accorte and have Alexander, Hestion, and Mia deal with the top left. Visiting the house to close the gate helps protect the farmers. Try to ensure no farmer dies and all the side objectives are completed with Accorte to get two valuable accolades. Remember to promote Hestion or Alexander and Lucion or Claude on this map.<br/><br/>
          Shop for some valuable healing staves and weapons with someone who has haggler as you will get a bit of money in this chapter. Accorte and Slayne will leave at the start of the next chapter if Accorte doesn't die in this map. So feel free to use up all of Slayne's long range bows on this map.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter20