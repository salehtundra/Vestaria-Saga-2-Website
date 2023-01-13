import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter12 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 12"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Every enemy is defeated.</span><br/>
          <span class="redtext">Defeat: Roleck dies</span><br/><br/>          
          Note: Everyone deployed is force deployed, you cannot do preparations or change their inventory. Roleck, Bennette, Phoeve, Lucion, Claude, Abrahm, and Bertoullia are the only units you get for this map.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter12map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter12data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            There is a weapon shop which sells tomes and healing items. Jonathan can buy a few of these.
          </li>
          <li>
            The Azure Paddock is good on this chapter as it allows you to get regenesis status on a few armor knights and let them be lure out the archers while being tankier than usual.
          </li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          If you visit the right house with Bennette you get a <Item itemtype={itemtypes[2]}>Ward Ring</Item> and a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>. It also provides a background story scene.
        </p>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>
            Visiting the village spawns Jonathan on it and gives you control over Bertoullia.
          </li>
          <li>
            You can begin a long sequence of events and back and forth with Phoeve which ends in a class change to the advanced class Mage Knight (which is mounted). Phoeve needs to first talk to the horse, then needs to go to the tree and grab an apple. She can go to the vegetable patch and grab a vegetable for a little scene. Next she goes back to the horse and undergoes a class change to Mage Knight.
          </li>
          <li>
            Visiting the house with either Claude or Lucion will prompt a message to class change for 1500 Denari. If you spend that money you can promote either one to a Royal Guard. You can only promote one of them as the house closes after they are promoted.
          </li>
          <li>
            Amlute and Luffine's party from 7x (minus Penneloupe) will arrive at the bottom on turn 10 to deal with all the remaining enemies.
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
            Barbarians will spawn from the right cave.
          </li>
          <li>
            Thieves will spawn from the left cave.
          </li>
          <li>
            Once you whittle down the enemy forces more flame archers will spawn from the right side of the cliff.
          </li>             
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Baruke2" chartype="enemy">
          <p>Baruke is a boss again and he is identical to before but this time has the Deathless skill so he cannot be defeated. He will leave the map around turn 8 for the next chapter making this the only chapter with no boss whatsoever.</p>
        </Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          This chapter's difficulty varies wildly depending on how much you leveled Bennette and Bertoullia. Bennette and Bertoullia are the only ones who can leave the enclosure and fight the archers. In my game, my level 24 Bennette could take out all 3 Ballista wagons before they spawned Ballista and I could use Bertoullia a few times to take out a few archers.<br/><br/>
          If your Bennette isn't this highly leveled up you will have to play defensively until Amlute's party arrives on turn 10. You can use the Azure Paddock to make Roleck and Abrahm survive longer and lure archers away from Bennette. Also have them stay on the far left edge to avoid most attacks. Amlute's party will not get attacked as it is considered a surprise attack as the game will explain to you.<br/><br/>
          While Bennette or Amlute's party is doing all the work you should do all the class changes and shopping as well as dealing with the reinforcements. Don't bother fighting Baruke with Bennette as you can't beat him anyway. I promoted Claude to Royal Guard since his Potential skill negates the one negative about early promotion and Phoeve to Mage Knight.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>      
    )
}

export default Chapter12