import Character from "../../components/guide/Character"
import Item from "../../components/guide/Item"
import { itemtypes } from "../../components/constants/Itemtypes"
import SectionBody from "../../components/guide/SectionBody"
import SectionHeader from "../../components/guide/SectionHeader"
import SectionTitle from "../../components/guide/SectionTitle"
import Footer from "../../components/guide/Footer"

const Chapter19 = () => {
    return (
      <div id="main">
      <SectionTitle title="Chapter 19"/>
      <SectionHeader>
        <h1 class="text-big">
          Map and Details
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Your conditions on this map are as follows:<br/>
          <span class="greentext">Victory: Defeat 8 Transports, Defeat Neilmaisen.</span><br/>
          <span class="redtext">Defeat: Arielle Dies, Neilmaisen Escapes, The transports escape.</span><br/>    
          At the beginning of this chapter you are given a choice if Bennette should leave or not. Saying yes makes her leave your army until the end of the game however she will return with Roleck. Saying no keeps her in your army but you lose Roleck. I chose yes for 100%.<br/><br/>
          You can deploy anyone on this chapter however anyone you deploy here cannot be used in Chapter 20. I recommend the minimum amount of units as chapter 20 is very large and complex. For an advanced strategy from Kaga's blog you can choose one flier and one physical unit. I chose Orphellia and Fauve as the only two deployed units for this chapter.<br/><br/>
          The following is what the chapter looks like on Turn 1:<br/>
          <img src="./screenshots/chapter19map.png" alt="Chapter Map" /><br/>
          I went through and marked everything of interest on the map as shown here:<br/>
          <img src="./screenshots/chapter19data.png" alt="Chapter Data" /><br/>
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Dialogue
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          After turn 10 when Phoros appears on the map. Arielle can talk to him. This recruits him for the next map onward and prevents you from needing to fight the army that arrives with him.
        </p>
      </SectionBody>
      
      <SectionHeader>
        <h1 class="text-big">
          Items and Item Drops
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          The final (9th) convoy wagon can drop <Item itemtype={itemtypes[2]}>Munitions</Item>. You will most likely beat the map before you reach this wagon.
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
            Not listed on the breakdown but before this chapter you have to decide if Bennette leaves your army or stays. Choose leave the army to get Roleck back on Chapter 25.
          </li>
          <li>
            Not listed on the breakdown but Arielle will show up in the front lines as a playable unit only for this chapter.
          </li>
          <li>
            On turn 10 Phoros will arrive at the bottom left of the map. The map will also turn from night to day.
            <img src="./screenshots/chapter19event.png" alt="Event 1" /><br/>
          </li>
          <li>
            On turn 12 Ravinia will arrive at the bottom right of the map next to Neilmaisen. Do not attack her as you can recruit her on the next chapter with Haldyn.
          </li>
          <li>
            On turn 12 Neilmaisen will don a disguise as a Lv 1 Grand Guard with an <Item itemtype={itemtypes[2]}>Imbue Lance</Item>. He will try to escape with the convoys and you must take him out before he reaches the top. Ravinia will stay close to him the entire time.
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
            After the first turn a bunch of different types of enemies spawn from the barracks. They only attack or move if you get close. They keep spawning creating a good source of exp farming for whoever goes to the middle of the map.
          </li>
          <li>
            Continuously different convoy wagons with different groups of enemies guarding them will spawn in the bottom right. 8 convoys will spawn each with different guardians who move with the convoy. You only need to focus on the convoy wagons themselves for this map.
          </li>
          <li>
            Phoros and his group of cavalry will show up in the bottom left on turn 10.
          </li>
          <li>
            Ravinia will show up in the bottom right on turn 12. Neilmaisen will turn into a grand guard and a group of grand guard will move to the north with Ravinia.
          </li>                                       
        </ul>
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Bosses
        </h1>
      </SectionHeader>          
      <SectionBody>
        <Character charname="Neilmaisen" chartype="enemy">
          <p>He starts off as a Vassal.</p>
        </Character>
        <Character charname="Neilmaisen2" chartype="enemy">
          <p>He changes into a Grand Guard when Ravinia arrives. He is very easy to beat with the only difficulty you encounter coming from the enemies surrounding him.</p>
        </Character>
        <Character charname="Phoros" chartype="enemy">
          <p>He is a Punitive Knight with a large army of cavalry that joins him. Talk to him with Arielle to recruit him for the next map and have all the cavalry ignore your units.</p>
        </Character>
        <Character charname="Ravinia" chartype="enemy">
          <p>She is kind of dangerous to fight but you do not want to fight her anyway as she can be recruited in the next chapter with Haldyn.</p>
        </Character>       
      </SectionBody>

      <SectionHeader>
        <h1 class="text-big">
          Guide
        </h1>
      </SectionHeader>          
      <SectionBody>
        <p class="text-small">
          Before this chapter commences choose to let Bennette go so you can get Roleck back on Chapter 25. In my game Bennette was max level so she was just an exp thief at this point anyway. Also any units you deploy on this map cannot be deployed on chapter 20 which is a much more difficult and complicated map.<br/><br/>
          This chapter is deceptively simple with one little trick (which evidently comes from the creator of the game, Kaga, in his blog). You only need to deploy a unit which can destroy the pirate ship with relative ease and tank Phoros cavalry for one turn (like Fauve) and a strong enough flying unit with a ranged weapon (like Orphelia or Aslanne).<br/><br/>
          Have Fauve get into the edge of range for the Pirate ship so he can take it out with a Hammer on the next turn. Then have the flying unit go to the right edge of the shoreline and perform hit and run attacks on each convoy. I chose Orphelia for this as Aslanne is slightly stronger for the next chapter, and she could easily one shot the weak transport convoy wagons, and she was guaranteed level ups for each wagon destroyed. It should look something like this.<br/><br/>
          <img src="./screenshots/chapter19strategy.png" alt="Strategy 1" /><br/>
          Have Fauve and Arielle on the right side ready for Phoros around turn 13. Have Fauve tank and take out a number of cavalry on enemy phase so Phoros gets directly in Arielles range. Then have Arielle talk to Phoros and you don't need to do anything with Arielle or Fauve for the rest of the map.<br/><br/>
          The only tricky challenge with this strategy is taking out Neilmaisen in one turn around turn 18, ideally with a Doyenne, and moving out of range of everything else. Whoever your flier is may need to be tanky enough to take some hits from the other grand guard and hopefully get almost surrounded by them on the right side so Ravinia can't attack. For a guaranteed safe strategy you can use the Blessed Tincture although I did not.<br/><br/>
        </p>
      </SectionBody>

      <Footer />
    </div>     
    )
}

export default Chapter19