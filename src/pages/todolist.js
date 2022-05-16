import React, { Component } from 'react';
const Taches = ["tache1", "tache2", "tache3"];

const listTaches = Taches.map((number) =>
    <li>{number}</li>
  );
export default function TodoList() {
    return (
        <ul>{listTaches}</ul>
    )
}
