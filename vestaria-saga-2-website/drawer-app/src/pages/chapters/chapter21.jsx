import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter21 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 21"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Lagniel is defeated.</span><br/>
          <span class="redtext">Defeat: Drake dies, Theodel or Emilia die, 40 turns pass.</span><br/>    
          You have Drake, Haldyn, Ravinia, Zayid, and Sheela auto deployed for this chapter. Anyone else deployed in this chapter will not be deployable in the next chapter. Some units like Zade are not available to be deployed.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter21map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter21data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Theodel and Emilia are only available on this chapter.
        </p>
        <Character charname="Ravinia" chartype="ally">
          <p>Starts auto-deployed if you have captured her in the previous chapter.</p>
        </Character>
        <Character charname="Cezar" chartype="ally">
          <p>If Drake is dead he acts a replacement unit for this chapter only and the map is a little more simplfied.</p>
        </Character>
        <Character charname="Theodel" chartype="ally">
          <p>A mage from the first game. He is only around for this chapter and the final chapter. He is pretty strong. He starts off without any weapons but can pick up a <Item itemtype={itemtypes[2]}>Folgore</Item> in the jail cell.</p>
        </Character>
        <Character charname="Emilia" chartype="ally">
          <p>A story character from the first game. She is only around for this chapter and the final chapter. On turn 10 she class changes and can use magic tomes.</p>
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
            Drake can talk to Theodel for some story background.
          </li>
          <li>
            Zayid can talk to Emilia for some story background. Sheela will eavesdrop on the conversation.
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
            Examining the Skeleton yields a <Item itemtype={itemtypes[2]}>Folgore</Item> tome. You need to go for this immediately with Theodel and Emilia to keep Theodel and Emlia alive.
          </li>
          <li>
            Defeating the mimic chest next to the lever drops an <Item itemtype={itemtypes[2]}>Infulnix</Item> tome.
          </li>
          <li>
            Defeating the mimic chest in the jail drops Theodel's personal weapon the <Item itemtype={itemtypes[1]}>Almaterna*</Item>.
          </li>
          <li>
            Examining the sword in the throne room with Drake yields the <Item itemtype={itemtypes[1]}>Crested Sanctblade*</Item>. Another personal weapon for Drake.
          </li>
          <li>
            Defeating all the mimics puts all the following items in your convoy:
            <table>
              <tr>
                <td>
                  <Item itemtype={itemtypes[2]}>Mimic Innards x 2</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[0]}>Catholicon</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[0]}>Hefty Sack of Coin</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[2]}>Defense Jolt</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[2]}>Resistance Jolt</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[0]}>Royal Jelly</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[0]}>Cerberus</Item>
                </td>
                <td>
                  <Item itemtype={itemtypes[2]}>Far-Healing Staff+1</Item>
                </td>
              </tr>
            </table>
            <img src="./screenshots/chapter21items.png" alt="Chapter Items" />
          </li>
        </ul>

        <p class="text-small">
          The following is the list of drops:
        </p>
        <ul>
          <li>
            One of the archskels in the jail drops a <Item itemtype={itemtypes[2]}>Masudian Brand</Item>.
          </li>
          <li>
            The necroturge in the jail with Theodel drops an <Item itemtype={itemtypes[2]}>Iberna</Item> tome.
          </li>
          <li>
            The dark mage in the jail with Theodel drops a <Item itemtype={itemtypes[2]}>Bloodleech</Item> tome.
          </li>
          <li>
            The Bloodwyrm boss drops a <Item itemtype={itemtypes[2]}>Bloodwyrm Extract</Item>. This is essential so you must not put it in stockpile.
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
            The prisoner in the jail cell needs the <Item itemtype={itemtypes[2]}></Item>Bloodwyrm Extract the Bloodwyrm boss drops. Drake must give it to him for a story scene and to learn the password to open the door to Lagniel's room.
          </li>
          <li>
            The three outside staircases all link up to nearby inner staircases. When one unit enters them to teleport the stairs disappear.
          </li>
          <li>
            On turn 11 Emilia will class change due to story reasons.
          </li>
          <li>
            The lever will open up the jail cell for Theodel and Emilia.
          </li>
          <li>
            Drake can investigate the sword in Lagniel's room to get the <Item itemtype={itemtypes[1]}>Crested Sanctblade*</Item>. The <Item itemtype={itemtypes[1]}>Crested Armlet*</Item> is removed from his inventory when doing this.
          </li>
          <li>
            Drake has special dialogue with Lagniel if Drake initiates combat with him.
            <img src="./screenshots/chapter21event.png" alt="Event 1" />
          </li>
          <li>
            Theodel has special dialogue with Lagniel if Theodel initiates combat with him.
            <img src="./screenshots/chapter21event2.png" alt="Event 2" />
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
            Necromancers can summon some archskels and there will be a few which spawn in the top left and top right corner.
          </li>
          <li>
            Some wolf riding skeletons will appear from the staircases at the top every once in a while.
          </li>
          <li>
            Very rarely a margulian wraith will spawn in the top left.
          </li>
        </ul> 
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Bloodwyrm2" chartype="enemy">
          <p>Has a lot of health and can poison. Phoeve is one of the best units to fight this creature. Ensure you keep the dropped item and don't sent it to the stockpile or you softlock the map.</p>
        </Character>
        <Character charname="Argos" chartype="enemy">
          <p>Has a lot of health and is somewhat tanky. Again Phoeve works wonders here.</p>
        </Character>
        <Character charname="Lagniel2" chartype="enemy">
          <p>Can be easily beaten by Drake with the <Item itemtype={itemtypes[1]}>Crested Sanctblade*</Item>. If you brought the <Item itemtype={itemtypes[2]}>Cordean Accolade</Item> on him you can use his weapon without any durability loss. Theodel and Drake have unique dialogue if you have them fight him.</p>
        </Character>
        <Character charname="Lagniel3" chartype="enemy">
          <p>He has a second form when you beat him and drops the <Item itemtype={itemtypes[1]}>Seal of Frist*</Item> if Drake beats that form.</p>
        </Character>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Have Theodel and Emilia go straight for the skeleton in the right corner to get a weapon for Theodel to clear out the jail cell. Have Drake cut across the jail and open all the doors he can. You may think the treasure chests are goodies at first glance but they are actually a new enemy type called the mimic. They do not move and only seem to counter attack when attacked however. Two of them drop special tomes upon defeat whereas all the others mention that the item was added to your stockpile.<br/><br/>
          Have everyone else circle around to get in the jail, pull the lever freeing Theodel and Emilia, defeating the Bloodwyrm, then meeting back at the door. Have a few units take care of the enemy reinforcements at the top.<br/><br/>
          Drake needs to take the <Item itemtype={itemtypes[2]}>Bloodwyrm Extract</Item> the Bloodwyrm drops and examine the prisoner in the jail cell for a story scene, next he can now open the door to Lagniel's room. The two assassins are a little dangerous so you need to take them out as well as Argos once Drake opens the door. Have Drake examine the sword to get his new personal weapon and use it against Lagniel for an easy win.<br/><br/>
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Softlock Warning
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          The game warns you about this but you cannot put the <Item itemtype={itemtypes[2]}>Bloodwyrm Extract</Item> into the stockpile as the chapter cannot be completed without it.
        </p>
      </SectionBody>

      <Footer />
    </div>      
    )
}

export default Chapter21