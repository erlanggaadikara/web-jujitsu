import ReactGA from "react-ga";

export default function (pageView) {
  const TrackingCode = "";
  ReactGA.initialize(TrackingCode);
  ReactGA.pageview(pageView);

  ReactGA.event({
    category: "User",
    action: "Create an Account",
  });
}
