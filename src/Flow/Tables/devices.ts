const devicesTable = {
  name: "devices",
  columns: [
    {
      name: "id",
      description: "Unique identifier of a user’s device.",
      handleType: "source",
      key: true,
      type: "integer"
    },
    {
      name: "user_id",
      description: "id of user who uses this device.",
      handleType: "target",
      type: "integer"
    },
    {
      name: "device_type",
      description: "Type of the device, could be browser (for users who are using Bindle website) or iphone (users who are reading via Bindle app).",
      type: "text"
    },
    {
      name: "connected_at",
      description: "Timestamp when user started using this device. Device with the earliest connected_at field is the device which user used for signing up.",
      type: "datetime"
    },
    {
      name: "version",
      description: "For browser devices it’s a User Agent. For iPhone devices it’s a version of user’s iPhone and a version of iOS separated by comma.",
      type: "text"
    },
  ]
};

export default devicesTable;
