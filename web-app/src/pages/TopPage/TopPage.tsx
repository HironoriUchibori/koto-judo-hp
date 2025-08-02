import { Carousel } from "../../components/Carousel/Carousel";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layout/Layout";
import NewsTable from "../../components/NewsTable/NewsTable";
import eventList from "../../data/events.json";
import './TopPage.css';

function TopPage() {
  return (
    <>
      <Carousel />
      <div className="top-page-content">
        <h3>新着情報</h3>
        <NewsTable />
        <h3>イベント情報</h3>
        <div className="event-grid">
          {eventList.map((event, index) => (
            <EventCard
              key={index}
              image_path={event.image_path}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopPage;
