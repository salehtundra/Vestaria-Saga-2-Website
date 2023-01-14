import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter23 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 23"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Guest units arrive at red arrow.</span><br/>
          <span class="redtext">Defeat: Any guest unit dies.</span><br/>    
          Every playable unit on this map is a new recruit and a guest unit for this chapter. You cannot let a single unit die. You can recruit Lea as well for this map. It is surprisingly pretty easy for an endgame chapter if you take it slowly.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter23map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter23data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Every single unit on this chapter is a guest unit meaning they will only be around for this chapter and some of them for the next few chapters. Everyone who can fight starts off wounded as well.
        </p>
        <Character charname="Troy" chartype="ally">
          <p>A paladin from the first game. He is useful here once you free him.</p>
        </Character>
        <Character charname="Bonacel" chartype="ally">
          <p> A guardian from the first game. In this chapter he must class change twice to get his normal class back as he starts as a weak prisoner. He can promote to Gigas first, then to General.</p>
        </Character>
        <Character charname="Prody" chartype="ally">
          <p>A guardian from the first game. In this chapter he must class change twice to get his normal class back as he starts as a weak prisoner. He can promote to Armored Brute first, then to Grand Guard.</p>
        </Character>
        <Character charname="Tasha" chartype="ally">
          <p>A chef from the first game who has the morale boost skill which is a better version of taskmaster. She can make everyone surrounding her move again like the dancers in Fire Emblem 4. The food buffs in her inventory will be needed for Prody and Bonacel to take on the enemies in the main cell chambers.</p>
        </Character>
        <Character charname="Emma" chartype="ally">
          <p>A mostly defenseless maid who can use the <Item itemtype={itemtypes[1]}>Filthy Mop</Item> weapon. She has an infinite use key a bone soldier drops which allows her to lockpick every door on this map.</p>
        </Character>
        <Character charname="Garlan" chartype="ally">
          <p>The tactician and player avatar from the first game. He is a mage and a healer who can get weapons and staves around the map. Try to get him as soon as you have Emma and her keys so he can help with the dark knight reinforcements.</p>
        </Character>
        <Character charname="Minister" chartype="ally">
          <p>Defenseless civilian who gives a <Item itemtype={itemtypes[2]}>Fur Coat</Item> accessory upon freeing him. He is only available to use in this chapter.</p>
        </Character>
        <Character charname="Grandmother" chartype="ally">
          <p>Defenseless civilian who gives a <Item itemtype={itemtypes[1]}>Filthy Mop</Item> which only emma can use in battle upon freeing her. She can recruit Lea to join. She is only available to use in this chapter.</p>
        </Character>
        <Character charname="Rebel" chartype="ally">
          <p>Defenseless civilian who gives a <Item itemtype={itemtypes[2]}>Ward Ring</Item> upon freeing him. He is only available to use in this chapter.</p>
        </Character>
        <Character charname="Lea" chartype="ally">
          <p>A boss on this chapter, use the Grandmother to recruit her instead of fighting her to get more allies who can fight and so you won't have to fight her. She is only available to use in this chapter unless you have her escape last. Then she joins for chapter 24 and 25.</p>
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
            Grandmother can talk to Lea to recruit her.
          </li>
          <li>
            Tasha can talk to Troy to give him a <Item itemtype={itemtypes[0]}>Fried Herring</Item>, a <Item itemtype={itemtypes[0]}>Tofu Steak</Item>, and an <Item itemtype={itemtypes[0]}>Elixir</Item>.
          </li>
          <li>
            Garlan can talk to Troy for some story.
          </li>
          <li>
            Bonacel can talk to Emma for some story.
          </li>
          <li>
            Garlan can talk to Bonacel for some story.
          </li>
          <li>
            Tasha can talk to Garlan to give him a <Item itemtype={itemtypes[0]}>Strawberry Cake</Item>.
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
            A skeleton a cell yields <Item itemtype={itemtypes[2]}>Thalavin</Item> when examined. This is a tome for Garlan.
          </li>
          <li>
            The right chest yields a <Item itemtype={itemtypes[2]}>Twingore</Item> when opened by Emma. This is a tome for Garlan.
          </li>
          <li>
            The weapons on the table yield a <Item itemtype={itemtypes[2]}>Wind Spear</Item> when examined.
          </li>
          <li>
            The middle chest yields <Item itemtype={itemtypes[1]}>Prody's Cuirass</Item> when opened by Emma. This turns Prody into a Grand Guard class.
          </li>
          <li>
            The left chest yields a <Item itemtype={itemtypes[0]}>Pike</Item> when opened by Emma.
          </li>
        </ul>
        <p class="text-small">
          The following are the enemy item drops.
        </p>
        <ul>
          <li>
            Netherturge drops a <Item itemtype={itemtypes[0]}>Defense Jolt</Item>.
          </li>
          <li>
            One of the Bone Soldiers drops some <Item itemtype={itemtypes[0]}>Herbs</Item>.
          </li>
          <li>
            One of the Dullahans drops <Item itemtype={itemtypes[0]}>Emma's Ring of Keys</Item>.
          </li>
          <li>
            The shaman drops Garlan's <Item itemtype={itemtypes[0]}>Healing Staff</Item>.
          </li>
          <li>
            The Dark Knight near Troy drops a <Item itemtype={itemtypes[0]}>Tisane</Item> for Troy.
          </li>
          <li>
            The Sheryan Hero Haliameszal drops a <Item itemtype={itemtypes[0]}>Healing Ring</Item> for Troy.
          </li>
          <li>
            Hellden drops <Item itemtype={itemtypes[0]}>Brute's Cuirass</Item>. This turns Prody into an Armored Brute class.
          </li>
          <li>
            Hugoniot drops <Item itemtype={itemtypes[0]}>Hugoniot's Cuirass</Item>. This turns Bonacel into a Gigas class.
          </li>
          <li>
            The Savage Marshall drops <Item itemtype={itemtypes[0]}>General's Cuirass</Item>. This turns Bonacel into a General class.
          </li>
          <li>
            Two guardians each drop a <Item itemtype={itemtypes[0]}>Spear</Item>.
          </li>
          <li>
            A guardian drops a <Item itemtype={itemtypes[0]}>Pilum+1</Item>.
          </li>
          <li>
            Lea drops her <Item itemtype={itemtypes[2]}>Iron Duke</Item> if you fight her instead of recruit her.
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
            The lever on the right opens the wall to the cell where Troy is fighting.
          </li>
          <li>
            The lever on the bottom left opens the door to the room it is located in. When you beat Hugoniot, the Savage Marshal will open this door himself.
          </li>
          <li>
            The lever on the top left opens the door to the room it is located in. When you beat the Savage Marshal, Maphmud will open this door himself.
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
            Dark Knights spawn from multiple locations at different times in the map.
          </li>
          <li>
            Bone Soldiers, Dullahans, and a Golem spawn from the Necromancer boss Maphmud near the end of the map.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Netherturge" chartype="enemy">
          <p>A decently tricky Mumiya. You need to gang up on her with Bonacel and Prody ideally with food buffs and morale boosts from Tasha. She drops a defense jolt which makes it easier to fight the Dullahan that has <Item itemtype={itemtypes[1]}>Emma's Ring of Keys</Item>.</p>
        </Character>
        <Character charname="Hellden" chartype="enemy">
          <p>Relatively easy. Drops a <Item itemtype={itemtypes[1]}>Brute's Cuirass</Item> for Prody to class change and become more useful.</p>
        </Character>
        <Character charname="Haliameszal" chartype="enemy">
          <p>Has a generic name but the dialogue shows what his real name is. He can be slightly tricky due to the cavalry lance but a lucky triple strike from Troy should easily end him.</p>
        </Character>
        <Character charname="Savage Beast" chartype="enemy">
          <p>Have him attack Troy at range until everone is in position to open the cell door to free Troy. This way you do not have to fight Lea with Troy before everyone gets there and you can recruit her with the Grandmother. Troy can easily defeat him and tank him.</p>
        </Character>
        <Character charname="Lea" chartype="enemy">
          <p>Just recruit her with Grandmother don't bother fighting.</p>
        </Character>
        <Character charname="Hugoniot" chartype="enemy">
          <p>He can be pretty difficult for Troy or Lea to fight but Prody can easily take him on and tank him with a wind spear after class changing to Grand Guard. Drops <Item itemtype={itemtypes[1]}>Hugoniot's Cuirass</Item> which can promote Bonacel to Gigas class.</p>
        </Character>
        <Character charname="Savage Marshal" chartype="enemy">
          <p>Easy to beat with Garlan and Prody with a <Item itemtype={itemtypes[2]}>Wind Spear</Item>. He drops the <Item itemtype={itemtypes[1]}>General's Cuirass</Item> to promote Bonacel to General class.</p>
        </Character>
        <Character charname="Maphmud" chartype="enemy">
          <p>Summons a bunch of enemies to block him off from your party but Troy can easily wipe him out.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This is a pretty easy chapter surprisingly. The objective is get everyone to the arrow and no unit on your team can die otherwise you lose. When you recruit Lea with Grandmother she also counts towards the lose objective.<br/><br/>
          Move Troy out of the way of Hugoniot. Evenly distribute Tasha's food among Prody and Bonacel to give them buffs as you move them towards the center. Have them take out all the enemies and get the defense jolt. Use the defense jolt and Tasha's buff to deal with the strong Dullahan who has <Item itemtype={itemtypes[1]}>Emma's Ring of Keys</Item>. Make sure to use Tasha's door key on Emma's cell and give Emma the Ring of Keys. Have her deal with opening everything. Rush to open Garlan's cell first since he will be helpful for dealing with the Dark Knight reinforcements that spawn on the left from time to time. Also get him the <Item itemtype={itemtypes[2]}>Thalavin</Item> tome asap from the skeleton in the cell with Emma and someone else.<br/><br/>
          Troy can take on every enemy that comes to fight him except the Savage Beast. Have Troy tank him and heal occasionally if needed. Troy should have a <Item itemtype={itemtypes[0]}>Tisane</Item> and <Item itemtype={itemtypes[2]}>Healing Ring</Item> from the first two enemies he fought. This way you can recruit Lea with the Grandmother once everyone reaches the cell and Emma opens it. Have a buffed Prody deal with the enemies in the right chamber and get his first class change item. The middle chest contains Prody's second class change item. Use it and have him deal with Hugoniot. A nearby wind spear makes it trivial for Prody.<br/><br/>
          Hugoniot drops <Item itemtype={itemtypes[1]}>Hugoniot's Cuirass</Item> which gives Bonacel his first class change item. Use it and the Saber you acquire to have Boncael take out the guards which come from the left room. He will get his second class change item from Savage Marshal, the <Item itemtype={itemtypes[1]}>General's Cuirass</Item>. Bonacel and Prody can take on the rest of the map with help from Troy here and there. Troy can easily take out the Necromancer at the end. Have everyone escape at the red arrow.<br/><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Softlock Warning
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Interestingly this chapter does not give you any warning about this softlock unlike the other chapters. However from the story cutscenes prior it is obvious what the softlock is. Emma is the only one who can open all the doors on the map. However Tasha only has a one use door key. If you use that door key on any cell other than Emma's, you have no way to open any of the other doors and cannot win the map since everyone needs to leave on the top left.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>         
    )
}

export default Chapter23