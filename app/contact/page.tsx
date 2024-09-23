"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Devis() {
  const [formData, setFormData] = useState({
    senderEmail: "",
    projectDescription: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const jsonData = JSON.stringify(formData);
    const whatsappNumber = +242065835337; // Remplacez par votre numéro WhatsApp
    const message = encodeURIComponent(jsonData);
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    try {
      window.open(whatsappLink, "_blank");
      toast.success("Devis envoyé avec succès sur WhatsApp!");
      setFormData({ senderEmail: "", projectDescription: "", budget: "", deadline: "" });
    } catch (error) {
      toast.error("Erreur lors de l'envoi du devis.");
    }
  };

  return (
    <motion.section
      id="devis"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Demandez un Devis</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Remplissez le formulaire ci-dessous pour recevoir un devis.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          placeholder="Votre email"
          value={formData.senderEmail}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="projectDescription"
          placeholder="Description du projet"
          required
          value={formData.projectDescription}
          onChange={handleChange}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="budget"
          type="text"
          required
          placeholder="Budget estimé"
          value={formData.budget}
          onChange={handleChange}
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="deadline"
          type="date"
          required
          value={formData.deadline}
          onChange={handleChange}
        />
        <button 
          type="submit" 
          className="mt-4 h-14 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
            Envoyer le Devis
        </button>
      </form>
    </motion.section>
  );
}
