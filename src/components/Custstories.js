import React, { useEffect, useState } from "react";
import { useOverrides, Stack } from "@quarkly/components";
import Stories from "./Stories";
const defaultProps = {
	"margin-top": "40px",
	"justify-content": "space-between",
	"quarkly-title": "Customer Stories"
};
const overrides = {};

const Custstories = props => {
	const {
		overrides,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [Story, setStory] = useState([]);
	useEffect(() => {
		fetch("https://api.airtable.com/v0/appkFsvmxTo9ARFg3/Table%201", {
			headers: {
				Authorization: "Bearer keyEauGB7hjUbG3vf"
			}
		}).then(response => response.json()).then(data => setStory(data.records.map(({
			fields
		}) => fields)));
	}, []);
	return <Stack {...rest}>
		     
		{Story.map(storee => <Stories storee={storee} />)}
		   
	</Stack>;
};

Object.assign(Custstories, { ...Stack,
	defaultProps,
	overrides
});
export default Custstories;