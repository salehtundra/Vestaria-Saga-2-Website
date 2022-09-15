import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter2 = () => {
    return (
        <div id="main">
          <SectionTitle title="Chapter 2"/>
          <SectionHeader>
            <h1 class="text-big">
              Map and Details
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
            Your conditions on this map are as follows:<br/>
              <span class="greentext">Victory: Open the exit and escape (with all survivors)</span><br/>
              <span class="redtext">Defeat: Zade dies, your last remaining ally dies</span><br/><br/>

            The following is what the first chapter looks like on Turn 1:<br/>
            </p>
            <img src="./screenshots/chapter2map.png" alt="Chapter Map" />
            <p>
              I went through and marked everything of interest on the map as shown here:<br/>
            </p>
            <img src="./screenshots/chapter2data.png" alt="Chapter Data" />
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              New Recruits
            </h1>
          </SectionHeader>          
          <SectionBody>
            <Character charname="Slayne" chartype="ally">
              <p>Slayne comes back from the previous game. He is an advanced class True Archer. Does not come with a personal weapon.</p>
            </Character>
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              Dialogue
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
              Zade can talk to Slayne for a little bit of story dialogue, there does not seem to be any direct reward.
            </p>
          </SectionBody>
          
          <SectionHeader>
            <h1 class="text-big">
              Items and Item Drops
            </h1>
          </SectionHeader>          
          <SectionBody>
            <ul>
              <li>The chest in the locked room contains a <Item itemtype={itemtypes[2]}>Healing Ring.</Item> I gave this to Ashram to nullify his hp draining skill.
                <img src="./screenshots/item2-1.png" alt="Treasure 1" />
              </li>
              <li>The skeleton next to the top right lever contains an <Item itemtype={itemtypes[0]}>Estoc</Item>.
                <img src="./screenshots/item2-2.png" alt="Treasure 2" />
              </li>
            </ul>
            <br/>
            <ul>
              <li>Kelbrigg drops Hilda's personal weapon the <Item itemtype={itemtypes[1]}>Justitia*</Item> upon defeat.</li>
              <li>A ruins thief on the map drops a <Item itemtype={itemtypes[2]}>Gemstone</Item> upon defeat. He tries to run away. You can catch up to him though since he goes in the wrong direction at first if you chase after him with Sheela. However the long range sleep wraith has to miss Sheela in order to do that. Otherwise the thief will go to the right and be hard to catch up to before he leaves.</li>
              <li>A bone soldier at the bottom left of the map drops a <Item itemtype={itemtypes[0]}>Service Sword</Item> upon defeat.</li>
              <li>A bone soldier which shows up in the locked room on turn 1 drops a <Item itemtype={itemtypes[2]}>Rusted Sword</Item> upon defeat. This is a necessary item for capturing new allies later.</li>
              <li>Another bone soldier which shows up in the locked room on turn 1 drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> upon defeat.</li>            
            </ul>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Events
            </h1>
          </SectionHeader>          
          <SectionBody>
            <ul>
              <li>Slayne arrives on turn 2 in the locked room with the sword in the stone.</li>
              <li>You can examine the sword in the stone with Zade for some story related things.</li>
              <li>You need to light the torches in the top of the room with preferably someone other than Zade to find the lever to activate the door.</li>
              <li>You should rescue Hilda before going for the exit. Zade gains the lockpick skill in this chapter so he can open the iron bars triggering a story event.</li>
              <li>Zade needs to work the lever in order to activate the door. If say no to activating the lever with Zade you softlock the game evidently.</li>            
            </ul>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Reinforcements
            </h1>
          </SectionHeader>          
          <SectionBody>
            <ul>
              <li>3 bone soldiers appear on turn 2 following Slayne.</li>
              <li>A bone soldier spawns from the hole near Hilda's holding cell as you approach it for roughly 5 turns.</li>
              <li>An Adonsphair (yes a major boss from the first game) appears again when Zade reaches the top of the map. Your ally on this map holds him off for a few turns and can actually kill him with some good RNG so you shouldn't have to worry if you already did everything on the map. However it is best if you already lit the torches before Zade reaches the top of the map to hit the lever.
                <Character charname="Adonsphair" chartype="enemy" />
              </li>         
            </ul>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Bosses
            </h1>
          </SectionHeader>          
          <SectionBody>
            <Character charname="Mustapha" chartype="enemy"><p>Guards Hilda's room. The only danger is the enemies alongside him fighting with him.</p></Character>
            <Character charname="Kelbrigg" chartype="enemy"><p>A very easy boss guarding the treasure chest. He cannot actually kill your units directly since he drops them to 1HP with his weapon. Ashram and Sujata should stay away from him though because of their personal skills triggering problems for you at 1HP.</p></Character>
          </SectionBody>

          <SectionHeader>
            <h1 class="text-big">
              Guide
            </h1>
          </SectionHeader>          
          <SectionBody>
            <p>
              This was a fairly simple map as you would expect. The first thing to do is to move all your units to the left and rush the bottom left door with Zade to open it and free Slayne. You can rush the thief with Sheela but she will have to go through some long range magic using wraiths with status effects. The thief will go to the top left corner and turn around to the right so you don't have to rush him too fast. He will leave if he reaches the top right corner though. He gives you the hint to turn on the lanterns at the top.
            </p><br/>
            <p>
              The rest of the chapter deal with how you see fit. I recommend moving Zade to the treasure room next to unlock the door, then to Hilda's room to trigger a story scene. While doing this have someone else light the torches on the top of the map. Finally have Zade press the lever and let everyone escape.
            </p><br/>
            <p>
              You do not need to go to the top right corner and confront the wraiths if you do not care about the estoc. You cannot interact with the top right corner lever with anyone.
            </p><br/>
          </SectionBody>

          <Footer />
        </div>        
    )
}

export default Chapter2