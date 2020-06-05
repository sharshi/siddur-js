import { JewishCalendar, HebrewDateFormatter } from "kosher-zmanim";

class Holiday {
  constructor(options) {
    this.jewishCalendar = new JewishCalendar(options)
    this.hebrewDateFormatter = new HebrewDateFormatter();
  }

  toString() {
    const yomTovIdx = this.jewishCalendar.getYomTovIndex();
    const yt = this.hebrewDateFormatter.transliteratedHolidays[yomTovIdx];
    return yt ? yt : "";
  }
}

export default Holiday;