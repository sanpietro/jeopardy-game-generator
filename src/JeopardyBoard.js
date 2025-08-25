import React, { useState } from 'react';
import jeopardyData from './data/questionTemplateCV.js';

export default function JeopardyBoard() {
  const [selectedClue, setSelectedClue] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredClues, setAnsweredClues] = useState(new Set());
  const [visibleCategories, setVisibleCategories] = useState(Math.min(4, jeopardyData.length));

  const handleClueClick = (clue, categoryIndex, clueIndex) => {
    const clueId = `${categoryIndex}-${clueIndex}`;
    if (answeredClues.has(clueId)) return;
    
    setSelectedClue({ ...clue, categoryIndex, clueIndex });
    setShowAnswer(false);
  };

  const handleClose = () => {
    if (selectedClue) {
      const clueId = `${selectedClue.categoryIndex}-${selectedClue.clueIndex}`;
      setAnsweredClues(prev => new Set([...prev, clueId]));
    }
    setSelectedClue(null);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setAnsweredClues(new Set());
    setSelectedClue(null);
    setShowAnswer(false);
  };

  const addCategory = () => {
    if (visibleCategories < Math.min(6, jeopardyData.length)) {
      setVisibleCategories(prev => prev + 1);
    }
  };

  const removeCategory = () => {
    if (visibleCategories > 1) {
      setVisibleCategories(prev => prev - 1);
      // Clear answered clues for categories that are no longer visible
      setAnsweredClues(prev => {
        const newAnsweredClues = new Set();
        prev.forEach(clueId => {
          const [categoryIndex] = clueId.split('-');
          if (parseInt(categoryIndex) < visibleCategories - 1) {
            newAnsweredClues.add(clueId);
          }
        });
        return newAnsweredClues;
      });
    }
  };

  // Inline styles to avoid CSS compilation issues
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#fbbf24',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    marginBottom: '2rem',
    letterSpacing: '0.1em'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '0.5rem'
  };

  const gameBoardStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${visibleCategories}, 1fr)`,
    gap: '1rem',
    width: '100%',
    maxWidth: `${Math.max(1200, visibleCategories * 300)}px`,
    marginTop: '3rem'
  };

  const categoryColumnStyle = {
    background: '#1e40af',
    border: '3px solid #fbbf24',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
  };

  const categoryHeaderStyle = {
    background: '#1e3a8a',
    color: '#ffffff',
    padding: '1.5rem 1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    borderBottom: '3px solid #fbbf24',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const clueButtonStyle = {
    display: 'block',
    width: '100%',
    padding: '2rem',
    border: 'none',
    borderBottom: '2px solid #1e3a8a',
    background: '#2563eb',
    color: '#fbbf24',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    minHeight: '100px',
    transition: 'all 0.3s ease'
  };

  const clueButtonDisabledStyle = {
    ...clueButtonStyle,
    background: '#1e3a8a',
    color: '#64748b',
    cursor: 'not-allowed'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    background: '#1e40af',
    border: '4px solid #fbbf24',
    borderRadius: '12px',
    padding: '3rem',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
  };

  const modalHeaderStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #fbbf24'
  };

  const modalCategoryStyle = {
    color: '#fbbf24',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const modalValueStyle = {
    color: '#fbbf24',
    fontSize: '3rem',
    fontWeight: 'bold'
  };

  const questionTextStyle = {
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '1.6',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const answerTextStyle = {
    color: '#fbbf24',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    border: '2px solid white',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    cursor: 'pointer',
    margin: '0 0.5rem'
  };

  const revealButtonStyle = {
    ...buttonStyle,
    background: '#16a34a',
    color: 'white'
  };

  const closeButtonStyle = {
    ...buttonStyle,
    background: '#dc2626',
    color: 'white'
  };

  const resetButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: '2px solid #fbbf24',
    borderRadius: '8px',
    background: '#16a34a',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'all 0.3s ease'
  };

  const controlButtonStyle = {
    padding: '0.5rem 1rem',
    border: '2px solid #fbbf24',
    borderRadius: '6px',
    background: '#1e40af',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
    margin: '0 0.5rem',
    transition: 'all 0.3s ease'
  };

  const controlButtonDisabledStyle = {
    ...controlButtonStyle,
    background: '#64748b',
    cursor: 'not-allowed',
    opacity: 0.6
  };

  return (
    <div style={containerStyle}>
      <div style={{textAlign: 'center'}}>
        <h1 style={titleStyle}>JEOPARDY!</h1>
        <p style={subtitleStyle}>Computer Vision Edition</p>
        
        <div style={{margin: '1rem 0'}}>
          <button
            style={visibleCategories <= 1 ? controlButtonDisabledStyle : controlButtonStyle}
            onClick={removeCategory}
            disabled={visibleCategories <= 1}
            onMouseOver={(e) => {
              if (visibleCategories > 1) {
                e.target.style.background = '#1e3a8a';
                e.target.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              if (visibleCategories > 1) {
                e.target.style.background = '#1e40af';
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            − REMOVE CATEGORY
          </button>
          
          <span style={{color: 'white', margin: '0 1rem', fontSize: '1rem'}}>
            {visibleCategories} Categories
          </span>
          
          <button
            style={visibleCategories >= Math.min(6, jeopardyData.length) ? controlButtonDisabledStyle : controlButtonStyle}
            onClick={addCategory}
            disabled={visibleCategories >= Math.min(6, jeopardyData.length)}
            onMouseOver={(e) => {
              if (visibleCategories < Math.min(6, jeopardyData.length)) {
                e.target.style.background = '#1e3a8a';
                e.target.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              if (visibleCategories < Math.min(6, jeopardyData.length)) {
                e.target.style.background = '#1e40af';
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            + ADD CATEGORY
          </button>
        </div>
        
        <button
          style={resetButtonStyle}
          onClick={handleReset}
          onMouseOver={(e) => {
            e.target.style.background = '#15803d';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#16a34a';
            e.target.style.transform = 'scale(1)';
          }}
        >
          RESET GAME
        </button>
      </div>
      
      <div style={gameBoardStyle}>
        {jeopardyData.slice(0, visibleCategories).map((category, categoryIndex) => (
          <div key={category.category} style={categoryColumnStyle}>
            <div style={categoryHeaderStyle}>
              {category.category}
            </div>
            <div>
              {category.clues.map((clue, clueIndex) => {
                const clueId = `${categoryIndex}-${clueIndex}`;
                const isAnswered = answeredClues.has(clueId);
                
                return (
                  <button
                    key={clue.value}
                    onClick={() => handleClueClick(clue, categoryIndex, clueIndex)}
                    disabled={isAnswered}
                    style={isAnswered ? clueButtonDisabledStyle : clueButtonStyle}
                    onMouseOver={(e) => {
                      if (!isAnswered) {
                        e.target.style.background = '#3b82f6';
                        e.target.style.transform = 'scale(1.02)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isAnswered) {
                        e.target.style.background = '#2563eb';
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {isAnswered ? '' : `$${clue.value}`}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedClue && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <div style={modalCategoryStyle}>
                {jeopardyData[selectedClue.categoryIndex].category}
              </div>
              <div style={modalValueStyle}>
                ${selectedClue.value}
              </div>
            </div>
            
            <div>
              {!showAnswer ? (
                <p style={questionTextStyle}>{selectedClue.question}</p>
              ) : (
                <p style={answerTextStyle}>{selectedClue.answer}</p>
              )}
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
              {!showAnswer && (
                <button
                  style={revealButtonStyle}
                  onClick={() => setShowAnswer(true)}
                >
                  REVEAL ANSWER
                </button>
              )}
              <button
                style={closeButtonStyle}
                onClick={handleClose}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
