import "./Explore.css";
import PieChartComponent from "../components/PieChartComponent";
import BarChart from "../components/BarChart";
import LineChartComponent from "../components/LineChart";
import AnimatedCounter from "../components/Counter";

const Explore = () => {
  return (
    <>
      <div className="bodyExplore">
        {/*         <h1 className="expTitle">Explore</h1> */}
        <div className="expNumber">
          <p>
            Could you tell <strong>how many conflicts</strong> are active today
            among all the people in the world?
          </p>
          {/*  <h1>546</h1> */}
          <div>
            <AnimatedCounter />
          </div>
        </div>

        <div className="pieChart">
          <div className="pieTitleWrap">
            <h3>Type of conflicts</h3>
          </div>
          <div className="pieText">
            <div className="type">
              <div className="typeTitle">
                <h6>1</h6>
                <h5>Extrasystemic</h5>
              </div>
              <p>
                Occur between a state and a non-state group outside its own
                territory. These conflicts are by definition territorial, since
                the government side is fighting to retain control of a territory
                outside the state system.
              </p>
            </div>

            <div className="type">
              <div className="typeTitle">
                <h6>2</h6>
                <h5>Interstate</h5>
              </div>
              <p>Conflicts between two or more states.</p>
            </div>

            <div className="type">
              <div className="typeTitle">
                <h6>3</h6>
                <h5>Internal</h5>
              </div>
              <p>
                Internal armed conflict occur between the government of a state
                and one or more internal opposition groups without intervention
                from other states.
              </p>
            </div>

            <div className="type">
              <div className="typeTitle">
                <h6>4</h6>
                <h5>International Internal</h5>
              </div>
              <p>
                Internationalized internal armed conflict occurs between the
                gevernment of a state and one or more internal opposition groups
                with intervention from other states, secondary parties, on one
                or both sides.
              </p>
            </div>
          </div>
          <PieChartComponent />
        </div>

        <br></br>

        <div className="pieChart">
          <div className="pieTitleWrap">
            <h3>Misinformation & manipulation</h3>
          </div>
          <div className="pieText">
            <div className="expParagraph">
              <p>
                The manipulation of information makes us think that the only
                conflicts today are the ones that are visible in the mainstream
                media. Tactics of misinformation campaigns are becoming more
                sophisticated, we need to build new frameworks of analysis to
                strengthen our collective defenses. A database of active
                conflicts can change our perception of reality. As the landscape
                of global conflicts continues to evolve, it's crucial to
                understand that many of these struggles happen outside the scope
                of traditional media coverage.
              </p>
              <p>
                With the rise of digital platforms and social media, the line
                between information and manipulation has blurred, allowing
                certain narratives to dominate while others remain hidden. By
                examining these sources, we can challenge distorted narratives,
                uncover the underlying causes of conflicts, and promote a more
                informed, empathetic approach to addressing global issues.
              </p>
            </div>
          </div>
          <p className="lineTitle">Deaths by year</p>
          <div className="lineChart">
            <LineChartComponent />
          </div>
        </div>

        <div className="pieChart">
          <div className="pieTitleWrap">
            <h3>Forced migrations</h3>
          </div>
          <div className="pieText">
            <div className="expParagraphTwo">
              <p>
                One of the consequences of conflicts is, forced migration, At
                the end of 2023, there were 117.3 million people forcibly
                displaced due to persecution, conflict, violence, human rights
                violations and other events that seriously disrupted public
                order. Based on its operational data, UNHCR estimates that
                forced displacement has continued to increase in the first four
                months of 2024; In fact, at the end of April 2024 the number
                exceeded 120 million people. Forced displacement is a
                consequence of the inability to preserve peace and ensure
                security.
              </p>
            </div>
            <div className="migrations">
              
              <div className="barChart">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
