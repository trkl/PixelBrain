import MyEvent from "../Events/Event";
import { MouseEventHandler } from "react";

interface EventHandler<T extends Event> {
  (event: T): void;
}

interface MouseObservableHandlers {
  mousedown: EventHandler<MouseEvent>;
  mouseup: EventHandler<MouseEvent>;
  touchend: EventHandler<TouchEvent>;
  touchstart: EventHandler<TouchEvent>;
}

export default class MouseObservable {
  constructor() {
    for (const event in ["mousedown", "touchstart", "mouseup", "touchend"]) {
      //@ts-ignore
      document.addEventListener(event, this[event], false);
    }
  }

  // mousedown(event: MouseEvent) {

  // }

  subscribeToTouch(event: TouchEvent) {}

  subscribeToClick(action: "down" | "up", event: Event) {}
}
