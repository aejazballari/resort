import React, { useState, useEffect } from "react";
import items from "./data";
const RoomContext = React.createContext();

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  let [type, setType] = useState("all");
  let [capacity, setCapacity] = useState(1);
  let [price, setPrice] = useState(0);
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(0);
  let [minSize, setMinSize] = useState(0);
  let [maxSize, setMaxSize] = useState(0);
  let [breakfast, setBreakfast] = useState(false);
  let [pets, setPets] = useState(false);

  useEffect(() => {
    let rooms = formatedData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
  }, []);

  const handleChange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = e.target.name;
    console.log(name, value);
    let state = {
      [name]: value,
    };
    console.log(state);
    let category = Object.keys(state);
    if (category[0] === "type") {
      setType(state.type);
    }
    if (category[0] === "capacity") {
      setCapacity(parseInt(state.capacity));
    }
    if (category[0] === "price") {
      setPrice(parseInt(state.price));
    }
    if (category[0] === "minSize") {
      setMinSize(parseInt(state.minSize));
    }
    if (category[0] === "maxSize") {
      setMaxSize(parseInt(state.maxSize));
    }
    if (category[0] === "breakfast") {
      setBreakfast(state.breakfast);
    }
    if (category[0] === "pets") {
      setPets(state.pets);
    }
  };
  const filterRooms = () => {
    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    setSortedRooms(tempRooms);
  };
  useEffect(filterRooms, [
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets,
  ]);

  const formatedData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        price,
        pets,
        breakfast,
        minPrice,
        minSize,
        maxSize,
        maxPrice,
        getRoom,
        handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
