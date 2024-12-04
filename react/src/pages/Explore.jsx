import "./Explore.css";
import PieChartComponent from "../components/PieChartComponent";
import BarChart from "../components/BarChart";
import LineChartComponent from "../components/LineChart";
const Explore = () => {
  return (
    <>
      <div className="bodyExplore">

        <h1 className="expTitle">Explore</h1>

        <div className="expNumber">
          <p>
            Could you tell how many conflicts are active today among all the
            people in the world?
          </p>
          <h1>546</h1>
        </div>

        <div className="pieChart">
          <p>Types of conflict:</p>
          <PieChartComponent />
        </div>

        <br></br>

        <div className="conteinerCenter">
          <h2>Desinformation and manipulation:</h2>
          <p>
            The manipulation of information makes us think that the only
            conflicts today are the ones that are visible in the mainstream
            media. Tactics of desinformation campaigns are becoming more
            sophisticated, we need to build new frameworks of analysis to
            strengthen our collective defenses. A database of active conflicts
            can change our perception of reality.
            <button onClick={() => ShowMeMore(text)}>
              {" "}
              Show me more{" "}
            </button>{" "}
          </p>
          <div className="LineChartComponent">
            <div>
              <p>
                This graph represents the number of deaths over the years . The
                x-axis shows the years, ranging from 1989 to 2023, while the
                y-axis displays the corresponding number of deaths for each
                year.
              </p>
              <div className="LinhCahrt">
                <LineChartComponent />
              </div>
            </div>
            <br />
            <div>
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
                security. As the frequency, duration and intensity of conflicts
                have increased (the increase is measured by conflict deaths in
                the graph below), the number of people forced to flee each year
                has also increased.
              </p>

              <BarChart />
            </div>
          </div>
          <br />
          <div>
            Humanity. In the first half of the century, the rise of
            totalitarianism and world wars favored classical studies on
            propaganda and other forms of information falsification to
            manipulate public opinion. The Internet in general, and social
            networks in particular, have contributed to an exponential
            multiplication of the messages that dominate the public sphere. In
            the World Classification of Freedom of Pressure which elaborates
            every year the organization of gubernamental Reporters Sin
            Fronteras, (2019), The ten countries in the world with the least
            freedom of press were, in this order, North Korea, Turkmenistan,
            Eritrea, China, Yibuti, Vietnam, Syria, Iran , Laos and Cuba. In the
            extreme of this same ranking, as an example of democracy with solid
            systems of freedom of press, figures in various European countries –
            Norway, Finland, Denmark, Suecia, Lower Countries, Suiza and
            Portugal –, as well as with nations such as Jamaica, Costa Rica y
            New Zealand. Spain is ranked as the 29th country – of 180 – with
            greater freedom of purchase. In this context of high levels of
            information freedom, in recent years the
          </div>
          <div className="Refugees"></div>
        </div>
      </div>
    </>
  );
};

export default Explore;
