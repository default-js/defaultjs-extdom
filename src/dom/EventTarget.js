/**
 * Adds the event functions to EventTarget.
 *
 * EventTarget is the root of everything dispatching events, not only of the dom,
 * so on(), removeOn() and trigger() are available on every node, on the document
 * and on the window alike.
 */
import extendPrototype from "../utils/ExtendPrototype";
import EventSupport from "./extentions/EventSupport";

extendPrototype(EventTarget, EventSupport);