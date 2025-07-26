import { json } from "@remix-run/node";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const message = url.searchParams.get("message") || "Hello from Announcement Bar!";
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  const bgColor = url.searchParams.get("bgColor") || "#000000"; // default black background
  const textColor = url.searchParams.get("textColor") || "#ffffff"; // default white text

  const now = new Date();

  // If start or end not provided, always show the message
  if (!start || !end) {
    return json({ message, bgColor, textColor, show: true });
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  const show = now >= startDate && now <= endDate;

  return json({ message, bgColor, textColor, show });
};
