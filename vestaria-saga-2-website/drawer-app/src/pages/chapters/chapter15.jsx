import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter15 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 15"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Baruke dies</span><br/>
          <span class="redtext">Defeat: Zade dies, Arielle dies</span><br/><br/>    
          Everyone is deployed and you will not have access to preparations screen for this.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter15map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter15data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Arielle2" chartype="ally">
          <p>On turn 11 you get Arielle. She has a <Item itemtype={itemtypes[1]}>Prayer Staff*</Item> personal weapon and can fully heal everyone. You only get her for this chapter.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          On turn 11 Arielle will join along with Fauve, Haldyn, Sujata, and Ashram. A green unit Paulos will also stand guard at the top. Baruke will be knocked down to the floor level with everyone else although he doesn't attack anyone.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
      <ul>
          <li>
            Archers will continually spawn from the stairs until turn 11.
          </li>
          <li>
            Cavalry will spawn every few turns until sometime after turn 11. Sorcerers and Grand Guard will also spawn from this as well.
          </li>
          <li>
            Two Giga Ballistas will spawn on turn 10 however if you did kept Leriza alive and captured her daughter back in Chapter 10 it looks like they will not fire because she tampered with them.
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Baruke3" chartype="enemy">
          <p>The final version of Baruke you will fight in this chapter. He is an Advanced Duke class and hits pretty hard but Zade with <Item itemtype={itemtypes[1]}>Edelstern*</Item> can destroy him fairly easily. When you beat him he will gain a much more powerful but much less accurate <Item itemtype={itemtypes[2]}>Savager</Item> sword and fully heal all damage. He does not seem to attack or move, only counterattack.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
        You have to turtle until turn 11 when you finally can attack Baruke. Then you get your reinforcements who can deal with the archers and enemies on the walls. The first few turns are the hardest as you get swarmed on all sides. Accorte, Sheela, and Amlute are good for taking out the archers on the walls; Accorte, Lilia, Zayid, and Zade are good for taking out the bulky grand guard; Laffine, Abrahm, Lucion, and Claude are good for blocking weaker units and dealing with the cavalry. Laffine needs to avoid taking hits on enemy phase from the cavalry though.<br/><br/>
        Stay close to the bottom middle for safety but you can branch out to the far left and far right sides if you clear off all the enemies. Then pick off any reinforcements. Keep Zade in the bottom middle to deal with Baruke at some point.<br/>
        </p>
      </SectionBody>

      <Footer />
    </div>       
    )
}

export default Chapter15