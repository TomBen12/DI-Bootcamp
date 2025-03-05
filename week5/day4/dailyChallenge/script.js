class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(this.uploader, this.time, this.title);
  }
}

const myVideo = new Video("How_to_draw_a_straight line.mp4", "Tom", 60000);

myVideo.watch();

const anotherVideo = new Video("Spirit.torrent", "Mike", 5040);

const videoData = [
  { title: "The Return of JavaScript", uploader: "Alice", time: 6000 },
  { title: "CSS The Movie", uploader: "Bob", time: 24242 },
  { title: "Action and React-ion", uploader: "Charlie", time: 2222 },
  {
    title: "Python: The Snake or The Language?",
    uploader: "Dave",
    time: 12000,
  },
  { title: "Debugging: The Horror Story", uploader: "Eve", time: 8345 },
];

const videos = videoData.map(
  (vid) => new Video(vid.title, vid.uploader, vid.time)
);
