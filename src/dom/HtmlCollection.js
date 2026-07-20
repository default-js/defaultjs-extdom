/**
 * Builds HTMLCollection as a list of html elements.
 *
 * Same as NodeList, only holding html elements - a live collection like children
 * therefore keeps its type when it is filtered.
 */
import buildListType from "./extentions/ListTypeBuilder";

buildListType(HTMLCollection, HTMLElement);
