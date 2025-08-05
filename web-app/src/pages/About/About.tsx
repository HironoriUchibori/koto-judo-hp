import CustomizedTimeline from "../../components/Timeline/CustomizedTimeline";
import './About.css';

function About() {
  return (
    <div className="about-page-content">
      <h3>会長からのメッセージ</h3>
      <p>
        江東区柔道会のホームページへようこそ。江東区柔道会は、地域の皆様に柔道を通じて心身の成長と健康を促進することを目的としています。
        ここでは、最新のお知らせやイベント情報、柔道に関する知識を提供しています。ぜひご覧ください。
      </p>
      <h3>江東区柔道会の歩み</h3>
      <CustomizedTimeline />
    </div>
  );
}

export default About;