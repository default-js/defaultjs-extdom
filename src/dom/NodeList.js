/**
 * Builds NodeList as a list of nodes.
 *
 * Besides the list functions this gives a NodeList every function of a node, by
 * delegation - calling one applies it to each node and collects the results.
 */
import buildListType from "./extentions/ListTypeBuilder";

buildListType(NodeList, Node);
