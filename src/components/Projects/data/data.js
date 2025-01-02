import arista from "../../../Assets/Projects/Arista/arista1.png"
import ansible from "../../../Assets/Projects/Arista/formation-ansible.png"
import arista_logo from "../../../Assets/Projects/Arista/blob.png"
import anssi from "../../../Assets/Projects/Anssi/logo_anssi.png"
import elk from "../../../Assets/Icons/elk-logo-1-removebg-preview.png"
import scrap from "../../../Assets/Projects/Scrape/1_IVCJe9HjFy3WIidHv18Ocg.jpg"
import python from "../../../Assets/Projects/Arista/logo-python.png"
import MLAG from '../../../Assets/Projects/Arista/Protocoles/MLAG.svg'
import BGP from '../../../Assets/Projects/Arista/Protocoles/BGP.svg'
import MPLS from '../../../Assets/Projects/Anssi/mpls-multi-protocol-label-switching-network-removebg-preview.png'
import crack from "../../../Assets/Projects/Aircrack-ng/wall.png"

export const projects = [
    {
      id: 1,
      title: "Arista Automatisation",
      slide:true,
      slide1:{
        img : MLAG,
        title : "Mlag",
      },
      slide2:{
        img : BGP,
        title : "Bgp",
      },
      slide3:{
        img : MLAG,
        title : "Vxlan Evpn L2",
      },
      category: "Réseaux/DevSecops",
      image: arista,
      client: {
        name: "Arista Automatisation",
        services: "MLAG BGP EVPN VXLAN",
        website: "Kizaru1294989/Arista_Automatisation",
        phone: "555 1234 567"
      },
      objective: "Les participants peuvent choisir de : Lancer le lab avec une configuration entièrement automatisée de tous les éléments nécessaires.Laisser un switch 'leaf' vierge pour s’exercer à la configuration manuelle. Ce laboratoire offre ainsi une opportunité unique de maîtriser les configurations automatisées tout en bénéficiant d’un environnement pratique et flexible pour expérimenter.L’objectif est de fournir un cadre structuré et interactif pour explorer l’automatisation réseau avec des équipements Arista. Grâce à la combinaison d’une interface web intuitive, d’un backend performant, et de la puissance d’Ansible dans un environnement EVE-NG, ce lab constitue une plateforme idéale pour comprendre les enjeux et les solutions liées à l’automatisation des protocoles réseau avancés.",
      challenge: "Ce laboratoire pratique vise à automatiser la configuration de protocoles réseau avancés tels que MLAG (Multi-Chassis Link Aggregation), BGP (Border Gateway Protocol), et VXLAN EVPN (Virtual Extensible LAN Ethernet VPN) L2 sur des switchs Arista. Il est conçu pour permettre aux participants de se familiariser avec les techniques et outils nécessaires à un déploiement efficace et automatisé de ces protocoles.Le lab repose sur une interface web développée avec React, qui communique via une API avec un backend construit en Flask. Ce backend est chargé de lancer des playbooks Ansible permettant d'automatiser la configuration des équipements réseau Arista dans un environnement virtualisé EVE-NG. Cette approche offre une expérience utilisateur fluide, combinant une interface moderne et des processus backend robustes pour simplifier l'automatisation des tâches réseau.Structure du Lab",
      tools: ["Arista", "Ansible", "Python", "Nginx", "MLAG", "BGP", "VXLAN EVPN L2"
        , "React","Eve-NG","Flask"],
      images: [
        ansible,
        arista,
        arista_logo,
        python,

      ]
    },
    {
      id: 2,
      title: "Infrastructure type Anssi",
      category: "Réseaux/Sécurité",
      image: anssi,
      client: {
        name: "Infrastructure type Anssi",
        services: "HA A/A MPLS OSFP BGP VXLAN EVPN L2",
        website: "https://phoenix.com",
        phone: "555 9876 543"
      },
      objective: "Build a modern mobile app for digital agency management.",
      challenge: "Creating a seamless mobile experience for project management.",
      tools: ["React Native", "Firebase", "Redux"],
      images: [
        MPLS,
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 3,
      title: "Cluster ELK",
      category: "Réseaux/Système",
      image: elk,
      client: {
        name: "Google Health",
        services: "Web Development & UI Design",
        website: "https://health.google.com",
        phone: "555 1234 567"
      },
      objective: "Create an intuitive health platform for managing patient data.",
      challenge: "Developing a secure and user-friendly interface for healthcare professionals.",
      tools: ["React", "Node.js", "MongoDB", "CSS"],
      images: [
        "../../../Assets/074A7445.jpg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 4,
      title: "Web Scraping",
      category: "Réseaux/DevSecops",
      image: scrap,
      client: {
        name: "Arista Automatisationh",
        services: "MLAG BGP EVPN VXLAN",
        website: "https://health.google.com",
        phone: "555 1234 567"
      },
      objective: "Create an intuitive health platform for managing patient data.",
      challenge: "Developing a secure and user-friendly interface for healthcare professionals.",
      tools: ["Arista", "Ansible", "Python", "Nginx", "MLAG", "BGP", "VXLAN EVPN L2", "React"],
      images: [
        ansible,
        arista,
        arista_logo
      ]
    },
    {
      id: 5,
      title: "Spyware Python",
      category: "Réseaux/Sécurité",
      image: anssi,
      client: {
        name: "Phoenix Digital",
        services: "Mobile Development",
        website: "https://phoenix.com",
        phone: "555 9876 543"
      },
      objective: "Build a modern mobile app for digital agency management.",
      challenge: "Creating a seamless mobile experience for project management.",
      tools: ["React Native", "Firebase", "Redux"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 6,
      title: "NASA interface API C#",
      category: "Web Application",
      image: elk,
      client: {
        name: "Google Health",
        services: "Web Development & UI Design",
        website: "https://health.google.com",
        phone: "555 1234 567"
      },
      objective: "Create an intuitive health platform for managing patient data.",
      challenge: "Developing a secure and user-friendly interface for healthcare professionals.",
      tools: ["React", "Node.js", "MongoDB", "CSS"],
      images: [
        "../../../Assets/074A7445.jpg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 5,
      title: "Script Aircrack-ng Bash",
      category: "Réseaux/Sécurité",
      image: crack,
      client: {
        name: "Phoenix Digital",
        services: "Mobile Development",
        website: "https://phoenix.com",
        phone: "555 9876 543"
      },
      objective: "Build a modern mobile app for digital agency management.",
      challenge: "Creating a seamless mobile experience for project management.",
      tools: ["React Native", "Firebase", "Redux"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 8,
      title: "Infrastructure NGINX",
      category: "Web Application",
      image: elk,
      client: {
        name: "Google Health",
        services: "Web Development & UI Design",
        website: "https://health.google.com",
        phone: "555 1234 567"
      },
      objective: "Create an intuitive health platform for managing patient data.",
      challenge: "Developing a secure and user-friendly interface for healthcare professionals.",
      tools: ["React", "Node.js", "MongoDB", "CSS"],
      images: [
        "../../../Assets/074A7445.jpg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: 9,
      title: "Browser Stealer",
      category: "Web Application",
      image: elk,
      client: {
        name: "Google Health",
        services: "Web Development & UI Design",
        website: "https://health.google.com",
        phone: "555 1234 567"
      },
      objective: "Create an intuitive health platform for managing patient data.",
      challenge: "Developing a secure and user-friendly interface for healthcare professionals.",
      tools: ["React", "Node.js", "MongoDB", "CSS"],
      images: [
        "../../../Assets/074A7445.jpg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
  ];
  
  