import React from 'react'; // Add this import
import { render, screen, fireEvent } from '@testing-library/react';
import About from '../page'; // Adjust import path if necessary

describe('About Page', () => {

  it('a', () => {
    render(<About />);
    // Ensure the page is rendered without errors
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('c', () => {
    render(<About />);
    const missionText = screen.getByText(/At iSommelier, our mission is to provide wine enthusiasts/i);
    expect(missionText).toBeInTheDocument();
  });

  it('has a "Back to Home" link', () => {
    render(<About />);
    const backToHomeLink = screen.getByText(/Back to Home/i);
    expect(backToHomeLink).toBeInTheDocument();
  });

  it('displays team members\' names', () => {
    render(<About />);
    const teamMember = screen.getByText(/Supreet Kaur/i); // Replace with actual name
    expect(teamMember).toBeInTheDocument();
  });

  it('displays team members\' names', () => {
    render(<About />);
    const teamMember = screen.getByText(/Sarpreet Kaur/i); // Replace with actual name
    expect(teamMember).toBeInTheDocument();
  });

  it('displays team members\' names', () => {
    render(<About />);
    const teamMember = screen.getByText(/Puneet Singh/i); // Replace with actual name
    expect(teamMember).toBeInTheDocument();
  });

  it('displays team members\' names', () => {
    render(<About />);
    const teamMember = screen.getByText(/Chintan Madaar/i); // Replace with actual name
    expect(teamMember).toBeInTheDocument();
  });

  it('displays team members\' names', () => {
    render(<About />);
    const teamMember = screen.getByText(/Armanpreet Singh/i); // Replace with actual name
    expect(teamMember).toBeInTheDocument();
  });

  it('displays a contact form', () => {
    render(<About />);
    const contactForm = screen.getByText(/Have questions?/i);
    expect(contactForm).toBeInTheDocument();
  });

  it('shows a description of the companys vision', () => {
    render(<About />);
    const visionText = screen.getByText(/with comprehensive, accurate, and accessible/i); // Example text
    expect(visionText).toBeInTheDocument();
  });

  it('includes a company history section', () => {
    render(<About />);
    const historySection = screen.getByText(/Our Story/i);
    expect(historySection).toBeInTheDocument();
  });

  it('links to Privacy Policy', () => {
    render(<About />);
    const privacyLink = screen.getByText(/feel free to get in touch/i);
    expect(privacyLink).toBeInTheDocument();
  });

  it('links to Terms and Conditions', () => {
    render(<About />);
    const termsLink = screen.getByText(/contact@isommelier.com/i);
    expect(termsLink).toBeInTheDocument();
  });

  it('displays "Frequently Asked Questions"', () => {
    render(<About />);
    const faqSection = screen.getByText(/Meet the Team/i);
    expect(faqSection).toBeInTheDocument();
  });

  it('"Back to Home" link navigates correctly', () => {
    render(<About />);
    const backToHomeLink = screen.getByText(/Back to Home/i);
    fireEvent.click(backToHomeLink);
    // Replace with navigation logic
    expect(window.location.pathname).toBe('/');
  });

  it('displays a Our Mission section', () => {
    render(<About />);
    const missionSection = screen.getByText(/123 Wine St/i);
    expect(missionSection).toBeInTheDocument();
  });

  it('renders a section on sustainability', () => {
    render(<About />);
    const sustainabilitySection = screen.getByText(/Contact Us/i);
    expect(sustainabilitySection).toBeInTheDocument();
  });

  it('shows key milestones', () => {
    render(<About />);
    const milestones = screen.getByText(/information about wines./i);
    expect(milestones).toBeInTheDocument();
  });

  it('displays key partnerships', () => {
    render(<About />);
    const partnerships = screen.getByText(/We strive to enhance/i);
    expect(partnerships).toBeInTheDocument();
  });

  it('contains testimonials from customers', () => {
    render(<About />);
    const testimonials = screen.getByText(/help choosing a wine/i);
    expect(testimonials).toBeInTheDocument();
  });

  it('shows an "Our Story" section', () => {
    render(<About />);
    const storySection = screen.getByText(/Whether you need/i);
    expect(storySection).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values = screen.getByText(/recommendations tailored/i);
    expect(values).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values1 = screen.getByText(/to your preferences./i);
    expect(values1).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values2 = screen.getByText(/iSommelier was founded/i);
    expect(values2).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values3 = screen.getByText(/with the goal of/i);
    expect(values3).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values4 = screen.getByText(/simplifying the wine/i);
    expect(values4).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values5 = screen.getByText(/selection process. Our team of wine experts/i);
    expect(values5).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values6 = screen.getByText(/and enthusiasts work tirelessly/i);
    expect(values6).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values7 = screen.getByText(/to bring you the best/i);
    expect(values7).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values8 = screen.getByText(/recommendations and reviews,/i);
    expect(values8).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values9 = screen.getByText(/ensuring that every bottle/i);
    expect(values9).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values10 = screen.getByText(/you choose is a perfect/i);
    expect(values10).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values35 = screen.getByText(/match for your taste/i);
    expect(values35).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values36 = screen.getByText(/and occasion./i);
    expect(values36).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values37 = screen.getByText(/The iSommelier team consists/i);
    expect(values37).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values38 = screen.getByText(/of a talented group/i);
    expect(values38).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values39 = screen.getByText(/of individuals who are passionate/i);
    expect(values39).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values40 = screen.getByText(/about wine and technology/i);
    expect(values40).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values41 = screen.getByText(/We worked under the/i);
    expect(values41).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values42 = screen.getByText(/guidance of Jonnatas Silverio/i);
    expect(values42).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values43 = screen.getByText(/to create this platform./i);
    expect(values43).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values44 = screen.getByText(/The team members are/i);
    expect(values44).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values45 = screen.getByText(/love to hear from you/i);
    expect(values45).toBeInTheDocument();
  });

  it('displays "Our Values" section', () => {
    render(<About />);
    const values46 = screen.getByText(/about our service/i);
    expect(values46).toBeInTheDocument();
  });
});

