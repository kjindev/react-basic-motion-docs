export const getContent = () => {
  const content = [
    {
      title: "Bounce",
      description: "Animation Component",
      code: {
        name: "x",
        range: 10,
      },
      text: [
        {
          name: "name",
          type: "string",
          value: '"x", "y"',
          unit: "-",
        },
        {
          name: "range",
          type: "number",
          value: "any number you want",
          unit: "px",
        },
        {
          name: "duration",
          type: "number",
          value: "any number you want",
          unit: "s",
        },
        {
          name: "timing",
          type: "string",
          value: '"linear", "ease", "ease-in", "ease-out", "ease-in-out"',
          unit: "-",
        },
        {
          name: "count",
          type: "string | number",
          value: '"forwards", "infinite" or any number you want',
          unit: "-",
        },
      ],
    },
    {
      title: "Fade",
      description: "Animation Component",
      code: {
        name: "blink",
        range: null,
      },
      text: [
        {
          name: "name",
          type: "string",
          value: '"fadein", "fadeout", "blink"',
          unit: "-",
        },
        {
          name: "duration",
          type: "number",
          value: "any number you want",
          unit: "s",
        },
        {
          name: "timing",
          type: "string",
          value: '"linear", "ease", "ease-in", "ease-out", "ease-in-out"',
          unit: "-",
        },
        {
          name: "count",
          type: "string | number",
          value: '"forwards", "infinite" or any number you want',
          unit: "-",
        },
      ],
    },
    {
      title: "Pulse",
      description: "Animation Component",
      code: {
        name: "blink",
      },
      text: [
        {
          name: "width",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },
        {
          name: "heigth",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },
        {
          name: "color",
          type: "string",
          value: "color code",
          unit: "-",
        },
        {
          name: "fillColor",
          type: "string",
          value: "color code",
          unit: "-",
        },
        {
          name: "radius",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },
        {
          name: "range",
          type: "number",
          value: "any number you want",
          unit: "px",
        },
        {
          name: "duration",
          type: "number",
          value: "any number you want",
          unit: "s",
        },
        {
          name: "timing",
          type: "string",
          value: '"linear", "ease", "ease-in", "ease-out", "ease-in-out"',
          unit: "-",
        },
        {
          name: "count",
          type: "string | number",
          value: '"forwards", "infinite" or any number you want',
          unit: "-",
        },
      ],
    },
    {
      title: "Ball",
      description: "Loading Component",
      code: {
        size: 20,
        color: "#232323",
      },
      text: [
        {
          name: "size",
          type: "number",
          value: "any number you want",
          unit: "px",
        },
        {
          name: "color",
          type: "string",
          value: "color code",
          unit: "-",
        },
        {
          name: "timing",
          type: "string",
          value: '"linear", "ease", "ease-in", "ease-out", "ease-in-out"',
          unit: "-",
        },
        {
          name: "count",
          type: "string | number",
          value: '"forwards", "infinite" or any number you want',
          unit: "-",
        },
      ],
    },
    {
      title: "Skeleton",
      description: "Loading Component",
      code: {
        width: "100px",
        height: "100px",
        radius: "30%",
        duration: 1,
      },
      text: [
        {
          name: "width",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },
        {
          name: "heigth",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },

        {
          name: "radius",
          type: "string",
          value: 'number in string type, for example, "100px" or "100%"',
          unit: "-",
        },
        {
          name: "duration",
          type: "number",
          value: "any number you want",
          unit: "s",
        },
        {
          name: "timing",
          type: "string",
          value: '"linear", "ease", "ease-in", "ease-out", "ease-in-out"',
          unit: "-",
        },
        {
          name: "count",
          type: "string | number",
          value: '"forwards", "infinite" or any number you want',
          unit: "-",
        },
      ],
    },
  ];
  return content;
};
