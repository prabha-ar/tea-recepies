import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "30%",
	"lg-width": "50%",
	"sm-width": "100%",
	"border-style": "solid",
	"border-width": "3px",
	"sm-font": "--base",
	"sm-background": "#feda59",
	"background": "#28eca5"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline1",
			"text-align": "center",
			"children": "8090s cafe"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"text-align": "center",
			"children": <>
				8090s  is a  Newly{" "}
				<br />
				statrted Cafe. We helped them to market their products.
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"font": "--headline3",
			"children": "Visit Site"
		}
	}
};

const Stories = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		storee = {}
	} = rest;
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" align-items="center" />
		<Text {...override("Name")} children={storee.Name} />
		<Text {...override("Feedback")} children={storee.Feedback} />
		<Link {...override("website")} children={storee.website} />
		{children}
	</StackItem>;
};

Object.assign(Stories, { ...StackItem,
	defaultProps,
	overrides
});
export default Stories;