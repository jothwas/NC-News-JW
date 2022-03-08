import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const formatDate = (created_at) => {
  return dayjs(created_at).fromNow();
};

export default formatDate;
