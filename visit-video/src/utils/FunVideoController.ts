export const handleUp = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "up",
  });
};
export const handleDown = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "down",
  });
};
export const handleLeft = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "left",
  });
};
export const handleRight = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "right",
  });
};
export const handleZoomIn = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "zoomin",
  });
};
export const handleZoomOut = (sockit: any) => {
  sockit.emit("apointment_id", {
    room: "123",
    action: "zoomout",
  });
};
