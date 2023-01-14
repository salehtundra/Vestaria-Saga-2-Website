import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter5 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 5"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>
      <SectionBody>
        <p>
            Your conditions on this map are as follows:<br/>
            <span class="greentext">Victory: All four towns remain defended for 15 turns</span><br/>
            <span class="redtext">Defeat: Zade dies, Roleck dies, A town is destroyed</span><br/><br/>
            Note: I strongly recommend deploying both Nelke and Karajan, Castore, Drake, and Alexander and Hestian to get everything on this map and make it easier. Also note the winning objective is an automatic win after holding out for 15 turns.<br/><br/>
            This map is going to be complicated from a guide perspective. It changes depending on a random chance in the very beginning before turn 1 even starts. During the story segment before you can start doing preparations Baruke will tell the army one of five things. What he tells them determines how the map will layout. Here is the summary of tactics that can change this map; you can save scum by reloading the chapter save to get the one you want. I've ranked them in order from easiest to hardest to gather all loot, keep everyone alive, and win the chapter.<br/>
        </p>
        <ul>
          <li>Baruke: No strategy just outnumber them - tons of easier reinforcements spawn, lots of experience you can gain (grind option).</li>
          <li>Baruke: Medician Poison Tactic - most reinforcements will spawn with poison weapons but they are pretty weak. (annoying option)</li>
          <li>Baruke: Hannibal Tactic - 80% of the units spawn from the right side. Units that spawn on the top and bottom right are of advanced classes sometimes with cavalry slaying weapons. (least chance for town being destroyed option).</li>
          <li>Baruke: Hammer and Anvil Tactic - most reinforcements are guardians and cavalry spawned from the north and bottom right side. Then archers from the right side. This option is meant to put pressure and focus on specific villages. (react fast option)</li>
          <li>Baruke: Heavy Phalanx Tactic - by far the hardest map version, far range healers help enemy units, full heal for everyone on the enemy side from the boss every turn, nasty defensive reinforcements with lances that buff nearby allies. A boss exists on the map with a drop-able tome but you are probably not getting it without some power grind to make some broken unit early. This version gives a ton of experience but you will most likely be close to breaking your personal weapons on it with everyone and certain bonus objectives like capturing Bezelphen is much harder with the full heal per turn. (hard option)</li>
        </ul>  
        <p>
          Side note: you can actually tell if the map is going to be Heavy Phalanx Tactic before Baruke even says anything if there are mages in the top right mountains of the battle preparations menu.<br/><br/>
          The following is what the chapter looks like on Turn 1 if Baruke did not say Heavy Phalanx Tactic:<br/>
          <img src="./screenshots/chapter5map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter5data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          New Recruits
        </h1>
      </SectionHeader>
      <SectionBody>
        <Character charname="Amlute" chartype="ally">
          <p>At the start of the map you have access to Amlute. He reminds me of a weaker Cyltan from the first game stat wise and with a similar personal weapon in <Item itemtype={itemtypes[1]}>Wandering Scion*</Item> with a 2x hit effect.</p>
        </Character>
        <Character charname="Laffine" chartype="ally">
          <p>At the start of the map you have access to Laffine. She reminds me of a weaker Merida from the first game stat wise for chapter 5.</p>
        </Character>
        <Character charname="Bertoullia" chartype="ally">
          <p>She is not playable on this map and stays a green unit but if you pay the 600 Denari for her to help you by visiting the house below her she will join as a playable unit for the next chapter. As a Dragon she is a unique class you get access to and has unbreakable weapons. Pay the 600 Denari near the end of the map and not the beginning as she has to live through this map to be recruited.</p>
        </Character>
        <Character charname="Barzlephen" chartype="ally">
          <p>Seems like a joke character. He is capturable by Zade on this chapter. His personal weapon <Item itemtype={itemtypes[1]}>Axe of Love*</Item> is weird in that it gives an immortal status effect to anyone hit by it for 5 turns.</p>
        </Character>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>
      <SectionBody>
        <ul>
          <li>Alexander can talk to Hestion resulting in a permanent +1 increase to both units Strength stat.</li>
          <li>Phoeve can talk to Castore after Castore acquires the <Item itemtype={itemtypes[2]}>Maiden's Favor</Item> from the water fairy event. It is an amusing dialogue but more importantly gives Castore a permanent +3 increase to resistance. This event also made me realize why I thought Phoeve looked familiar the first time I saw her portrait.</li>
        </ul>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Shops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>There are two shops on this map. This is the first map you have a shop to buy things from however you can buy things in previous chapters from Jonathan's shop or his granddaughters in the preparation menu. The granddaughters shop which is available this chapter has some decently rare things worth buying. I recommend the Staff of Regensis for both Nelke and Karajan. It is not a useful staff but it allows them to level up really fast if they spam it. I also recommend a flame bow for Sheela or Slayne.</p>
        <p>Important!! When buying from shops always buy things with Jonathan. He has a skill which reduces prices by 25%.</p>
        <ul>
          <li>The first shop sells general weapons. <Item itemtype={itemtypes[0]}>Cutlass</Item> can be bought here.</li>
          <li>The second shop is a tavern which gives temporary stat boosts for 200 Denari.</li>
        </ul>        
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
      <ul>
          <li>The house on the left gives you <Item itemtype={itemtypes[0]}>500 Denari</Item>.</li>
          <li>The top right house gives you <Item itemtype={itemtypes[0]}>665 Denari</Item>.</li>
          <li>The middle right house gives you a <Item itemtype={itemtypes[0]}>Sack of Coin</Item>.</li>
          <li>The bottom right house gives you <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.</li>
          <li>The blue highlighted lily pads on the river which only one of your sailors can reach either gives you a <Item itemtype={itemtypes[2]}>Maiden's Favor</Item> or a <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item> depending on your choice.
            <img src="./screenshots/chapter5item1.png" alt="Treasure 1" />
          </li>
          <li><Item itemtype={itemtypes[2]}>Siurian Thaumite</Item> can be found by examing the ore deposit in the forest, it will spawn two thieves with Deadly Edge knives.
            <img src="./screenshots/chapter5item2.png" alt="Treasure 2" />
          </li>
          <li>The flower in the forest when examined yields <Item itemtype={itemtypes[0]}>Bellflower Leaf</Item>.
            <img src="./screenshots/chapter5item3.png" alt="Treasure 3" />
          </li>
          <li>The flower in the top left near the bandits when examined yields <Item itemtype={itemtypes[0]}>Octavo Herbs</Item>.
            <img src="./screenshots/chapter5item4.png" alt="Treasure 4" />
          </li>
        </ul>
        <p>With the exception of one item, the drops do not seem to differ depending on the tactic.</p>
        <br/>
        <ul>
          <li>Berserker in the top left corner on turn 1 drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> on defeat.</li>
          <li>Berserker in the top left corner on turn 1 drops a <Item itemtype={itemtypes[0]}>Hatchet</Item> on defeat.</li>
          <li>Mountaineer in the top left corner on turn 1 drops a <Item itemtype={itemtypes[0]}>Herbs</Item> on defeat.</li>
          <li>Mountaineer in the top left corner on turn 1 drops a <Item itemtype={itemtypes[0]}>Tomahawk</Item> on defeat.</li>
          <li>Thief that spawns in the top left corner after a few turns drops a <Item itemtype={itemtypes[0]}>Jeweled Knife</Item> upon defeat.</li>
          <li>Thief that spawns in the top left corner after a few more turns drops a <Item itemtype={itemtypes[0]}>Jeweled Knife</Item> upon defeat.</li>
          <li>Ruffian that spawns with the second thief drops a <Item itemtype={itemtypes[2]}>Golden Axe</Item> upon defeat.</li>
          <li>When Barzlephen spawns, a thief and a ruffian spawn with him. The thief drops a <Item itemtype={itemtypes[0]}>Jeweled Knife</Item> and the ruffian drops a <Item itemtype={itemtypes[0]}>Sack of Coin</Item> upon defeat.</li>
          <li>If Heavy Phalanx Tactic is used there is a boss on this chapter with a <Item itemtype={itemtypes[2]}>Bloodleech</Item> tome he drops. Good luck getting it, the enemy long range ballista and long range sorcerers in the top right corner next to him are very difficult to deal with at this point in the game. If you power leveled Sujata she may be able to handle some of it if she doesn't go down to 1HP and become berserk.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Events
        </h1>
      </SectionHeader>          
      <SectionBody>
        <ul>
          <li>As explained in the map overview this map changes depending on what Baruke says the tactic is for the AI. Pay close attention to it and reload if you want a specific tactic and map formation.</li>
          <li>If you visit the blue highlighted lily pads with either sailor a cutscene will occur and you will be offered a choice between an <Item itemtype={itemtypes[2]}>Esoteric Scripture</Item> (free level up) and a <Item itemtype={itemtypes[2]}>Maiden's Favor</Item> (stat boost accessory). I recommend the <Item itemtype={itemtypes[2]}>Maiden's Favor</Item>.
            <img src="./screenshots/chapter5event1.png" alt="Event 1" />
          </li>
          <li>Make sure to visit the house below the mountain when the map is close to ending to get Bertoullia as an ally. You want to do this later because you need to keep her alive as a green unit to permanently recruit her and she tends to go for the thieves above her on the map which drop loot preventing you from getting the loot.</li>
          <li>Not on the map as an event but Barzelphen* shows up in the forest in the top left corner after a while and is capturable. Have Zade nearby to capture him.
            <img src="./screenshots/chapter5event2.png" alt="Event 2" />
          </li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Reinforcements
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p>The map changes drastically here depending on which tactic is used. Reinforcements will spawn from the same location but which reinforcements they are, what weapons they use, and how strong they are changes depending on the tactic.<br/>
          <br/>The static reinforcement spawns are:</p>
        <ul>
          <li>Two thieves with Deadly Edges spawn next to whoever examines the ore in the forest.</li>
          <li>A thief, a thief, a thief and a ruffian, and a thief and a ruffian and Barzelphen, and then a thief and a ruffian spawn in the top left corner each separated by a few turns. Have Ashram and Zade nearby to loot all the treasure they have and capture Barzelphen.</li>
        </ul>
        <p>The non static reinforcement spawns are:</p>
        <ul>
          <li>The top right section of the map will spawn infantry units most of the time. On the easier tactics this can be soldier and archers. On the harder tactics this can be grand guard and lance knights with cavalry lances.</li>
          <li>The right section of the map will generally spawn infantry units. On easier tactics this can be soldiers and archers. On harder tactics this can be archers, sorcerers, axemasters, grand guard.</li>
          <li>The bottom right section of the map typically spawns cavalry units or grand guard units depending on the difficulty of the tactics. On easy tactics it will be soldiers and archers. On medium tactics it will be cavalry like lance knights with cavalry lances or sniper knights with longbows. On hard tactics it will be lance knights, axe knights, sniper knights, and grand guard.</li>
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Baruke" chartype="enemy"><p>Funny enough there is a glitch and you cannot see him on the map however if you scroll through the enemy units you can view Baruke's enemy data. You can't actually fight him I think but I wonder if his skills are active and making the enemies much worse than normal as all the enemies on the top right are pretty tough to deal with. This is most likely his placeholder sprite as he shows up before turn 1 to state the tactic for the AI of the map.</p></Character>
        <Character charname="Livuitton" chartype="enemy"><p>If the tactic is Heavy Phalanx there is an enemy necromancer on the top right of the screen. He drops a decently strong magic tome with a 2x hit effect and HP steal. Again good luck getting to him due to the difficult enemies nearby.</p></Character>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
      <ul>
          <li>No tactics overwhelm with numbers strategy (easy):<br/><br/>
            This is the best version of the map to do as it gives you a way to level up your weakest units easily. In this version all the reinforcements are low level unpromoted classes except for the last few turns but they come in numbers of 5, come in frequently, and give decent experience. In this version I had Alexander and Hestion take the top side, Drake and Baymonk take the bottom, Phoeve and Bennette take the right side, and Ashram and Zade take the left side. Complete every objective with the remaining units. This version of the map is really good for leveling Sujata if you want to make her a strong unit by endgame.<br/><br/>
          </li>
          <li>Medician Poison, Hannibal, and Hammer and Anvil map tactics strategy (normal):<br/><br/>
            The strategy I used on the middle 3 difficulty versions of the map all worked roughly the same. I had Drake and Baymonk take the bottom section but mostly just have Drake solo it. Baymonk can deal with the ambush of thieves at the ore location. Have Karajan and Nelke in the middle doing far range healing duty and nelke's staff respectively. Laffine and Amlute can mostly solo the top of the map but you can provide them help via a decently strong unit like Zayid if necessary to conserve their weapons. Ashram and Zade seemed perfect for the left as Zade can capture Barzlephen and both of them are fast and accurate enough to hit the thieves. Phoeve, Abrahm, Accorte or Sheela, and Bennette are typically all that is needed to deal with the reinforcements on the right side.<br/><br/>
            Move units around accordingly and use units like Alexander and Hestion to grab any loot that the others can't easily reach.<br/><br/>
          </li>
          <li>Heavy Phalanx Tactic strategy (hard):<br/><br/>
            For nearly all the versions the strategy is mostly the same however, Heavy Phalanx Tactic is not easy. Turn 14 without proper strategy and the correct units in the correct places can look like this:<br/>
            <img src="./screenshots/chapter5turn14.png" alt="Chapter 5 Turn 14" />
            <br/>
            In order to have a better version of Heavy Phalanx Tactic, you should field Accorte, Sheela, Hilda, and Zade with an Edelstein*. They need to be on the top and right side mostly. Baymonk can take on the bottom with Drake but it is risky. Drake cannot handle the Grand Guards at all and do any damage but Baymonk can take them out with a little lucky evades. Drake will be needed for countering the future Sniper Knights which spawn near the final turns of the map. However the majority of the Grand Guards will come from and need to be stopped from the top and the right side of the map.<br/><br/>
            Each Grand Guard uses a phalanx lance which gives +3 defense and +3 resistance to nearby allies. They group up together and most of your units will be powerless to do enough damage to them. Even the ones that do enough damage may be close to breaking their personal weapons due to the high defense and high HP of the Grand Guard. Since Grand Guard is an advanced class this tactic can yield a lot of experience. But most of your decent weapons will be close to breaking due to the high defense you need to deal with and the constant healing from Livuitton. Speaking of which it is a death trap to even try to get near him with the long range sleep sorcerer, the long range paralysis sorcerer, and the multiple arbalest +2 users near him.<br/><br/>
            Try to complete as many optional objectives and item looting with the rest of your units like Catsore, Alexander, and Hestion. You can try to keep Zade on the left with Ashram to deal with the bandits that flee south and recruit Barzelphen however his <Item itemtype={itemtypes[1]}>Edelstein*</Item> is really helpful against the Grand Guard and he is needed more for them.<br/><br/>
            Ultimately the large amount of experience plus the challenge of this tactic is worth doing once in a temp save if you crave a challenge however you will lose far too much weapon durability in the process of chipping away at this version of the map. I do not recommend fighting this version of the map unless you want to be challenged or you really want to power level Accorte, Sheela, and Phoeve at the expense of their personal weapons.<br/><br/>
          </li>
      </ul>
      <br/>  
      <p>A few general notes which apply to all 5 strategies. Buy a few tomes from the preparations screen and give them to Phoeve and Accorte so they don't waste their personal weapon on this chapter. Buy some Staff of Regenesis at the same shop for both Nelke and Karajan, they aren't super useful but great at power leveling your healers. Have Jonathan buying whatever you need for the next few chapters. I recommend a few cutlasses and lances. Have Castore get the <Item itemtype={itemtypes[2]}>Maiden's Favor</Item> from the lake and go over to Phoeve to have her talk and give Castore +3 Resistance.<br/>
         The reinforcement enemy AI has some interesting quirks in this chapter as well. If you block them from being able to get to a village and destroy it they will go for the nearest weakest unit as normal, however if there is a maze like path of your units to an empty village the game becomes a tower defense as they ignore attacking anyone. You can strategically place units on and off the villages to exploit this, especially on Heavy Phallanx Tactic.<br/>
         One last tip, you can get a STR or DEF buff on a unit for the chapter for a little bit of money at the Azure Paddock. I did not use this personally.</p>
      </SectionBody>

      <Footer />
    </div>           
    )
}

export default Chapter5