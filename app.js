// Roadmap Data
const roadmapData = {
  checkpoints: {
    start: {
      title: 'PROJECT START',
      description: 'Project Kickoff & Planning',
      items: [
        'Define scope & objectives',
        'Set up development environment',
        'Team onboarding & training',
        'Tech stack selection'
      ]
    },
    checkpoint1: {
      title: 'MVP CORE',
      phase: 'Foundation Layer',
      description: 'Build the essential foundation',
      features: {
        frontend: [
          'Next.js 14 project setup',
          'Tailwind CSS + shadcn/ui',
          'TypeScript configuration',
          'Mobile-first design system',
          'Authentication UI (login/signup)',
          'User profile page'
        ],
        backend: [
          'Firebase setup & config',
          'Google OAuth integration',
          'Firestore schema design',
          'User collection & auth',
          'Basic CRUD operations'
        ],
        impact_tracking: [
          'Action logging form',
          'Simple CO2 calculator',
          'Basic impact dashboard',
          'Action history view'
        ]
      },
      technologies: ['Next.js 14', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      complexity: 'Simple'
    },
    checkpoint2: {
      title: 'ENHANCED FEATURES',
      phase: 'Smart Layer',
      description: 'Add intelligence & content',
      features: {
        impact_analytics: [
          'Advanced analytics dashboard',
          'Charts with Recharts',
          'Calendar heatmap',
          'Impact trends (weekly/monthly/yearly)',
          'Data export (PDF/CSV)',
          'Comparative metrics'
        ],
        education_hub: [
          'Resource content structure',
          'Article/video/guide categorization',
          'Search & filter system',
          'Reading time estimates',
          'Content recommendations'
        ],
        events_geolocation: [
          'Basic map integration',
          'Event creation form',
          'Location tagging',
          'Simple event list view',
          'Basic filtering'
        ]
      },
      technologies: ['Recharts', 'MapLibre GL', 'Firestore'],
      complexity: 'Medium'
    },
    checkpoint3: {
      title: 'COMMUNITY & AI',
      phase: 'Intelligence Layer',
      description: 'Activate intelligence & community',
      features: {
        ai_suggestions: [
          'Edge AI setup (TensorFlow Lite)',
          'User profiling engine',
          'Behavior analysis',
          'Personalization algorithm',
          'Suggestion ranking & caching',
          'Gemini AI integration (via Genkit)',
          'Eco-assistant chatbot'
        ],
        community: [
          'User profile enrichment',
          'Follow/unfollow system',
          'Activity feed',
          'Action sharing',
          'Notifications system',
          'Real-time updates'
        ],
        gamification: [
          'Badge system',
          'Achievement tracking',
          'User streaks',
          'Impact milestones'
        ]
      },
      technologies: ['TensorFlow Lite', 'Gemini AI', 'Genkit', 'Firebase Functions'],
      complexity: 'Complex'
    },
    checkpoint4: {
      title: 'SCALE & OPTIMIZATION',
      phase: 'Performance Layer',
      description: 'Optimize for growth',
      features: {
        map_advanced: [
          'Clustering with Supercluster',
          'Category-based filtering',
          'Distance radius search',
          'Date range filtering',
          'Custom map markers',
          'Real-time event updates',
          'Geofencing notifications'
        ],
        performance: [
          'Code splitting & lazy loading',
          'Database indexing',
          'Query optimization',
          'SWR caching strategy',
          'Image optimization',
          'Lighthouse optimization (90+)'
        ],
        leaderboards: [
          'Global leaderboards',
          'CO2 rankings',
          'Streak leaders',
          'Time-decay scoring',
          'Monthly/all-time views'
        ]
      },
      technologies: ['Supercluster', 'Vercel', 'Database Optimization'],
      complexity: 'Complex'
    },
    checkpoint5: {
      title: 'ADVANCED INTEGRATIONS',
      phase: 'Ecosystem Layer',
      description: 'Build ecosystem partnerships',
      features: {
        environmental_data: [
          'Carbon offset APIs',
          'Regional emission factors',
          'Weather API integration',
          'Environmental databases',
          'Local air quality data'
        ],
        verification: [
          'Impact verification system',
          'Third-party certifications',
          'Transparency reports',
          'Science partnerships',
          'Audit trail logging'
        ],
        notifications: [
          'Smart event reminders',
          'Weather-triggered tips',
          'Community milestones',
          'Personalized digests',
          'Push notifications',
          'Email integration'
        ]
      },
      technologies: ['APIs', 'Firebase Cloud Functions', 'Webhooks'],
      complexity: 'Complex'
    },
    checkpoint6a: {
      title: 'MARKET LEADERSHIP (B2B)',
      phase: 'Enterprise Path',
      description: 'Enterprise-ready platform',
      features: {
        organizational: [
          'Organization dashboard',
          'Team management',
          'Corporate event mgmt',
          'ESG reporting tools',
          'Custom branding'
        ],
        b2b_integration: [
          'REST API for third parties',
          'White-label options',
          'Bulk user management',
          'Enterprise SSO',
          'Advanced analytics API'
        ],
        scalability: [
          'Multi-tenant architecture',
          'Load balancing',
          'Database sharding',
          'Global CDN'
        ]
      },
      technologies: ['Supabase', 'API Design', 'Enterprise Auth'],
      complexity: 'Complex'
    },
    checkpoint6b: {
      title: 'MARKET LEADERSHIP (B2C)',
      phase: 'Consumer Path',
      description: 'Global consumer expansion',
      features: {
        mobile_app: [
          'React Native/Flutter setup',
          'Native performance',
          'Offline capabilities',
          'Push notifications',
          'OS-specific optimizations'
        ],
        global_expansion: [
          'Multi-language support',
          'Regional customization',
          'Local partnerships',
          'Payment processing',
          'Currency conversion'
        ],
        social_features: [
          'Photo/video sharing',
          'Social challenges',
          'Viral sharing mechanics',
          'User-generated content'
        ]
      },
      technologies: ['React Native', 'i18n', 'Payment APIs'],
      complexity: 'Complex'
    },
    continuous: {
      title: 'CONTINUOUS IMPROVEMENT',
      phase: 'Ongoing Evolution',
      description: 'Ongoing optimization & evolution',
      features: {
        analytics_monitoring: [
          'User analytics & tracking',
          'Feature usage monitoring',
          'Performance metrics'
        ],
        quality_assurance: [
          'Environmental impact validation',
          'Community feedback loops',
          'Bug fixes & improvements'
        ],
        security_updates: [
          'Security audits',
          'Regular updates & enhancements'
        ]
      },
      technologies: ['Firebase Analytics', 'Monitoring Tools', 'CI/CD'],
      complexity: 'Ongoing'
    }
  },
  layers: {
    frontend: { name: 'Frontend', color: '#0066FF' },
    backend: { name: 'Backend', color: '#6B46C1' },
    ai: { name: 'AI', color: '#F59E0B' },
    maps: { name: 'Maps', color: '#EF4444' },
    social: { name: 'Social', color: '#06B6D4' }
  }
};

// State
let currentView = 'horizontal';
let currentFilter = 'all';
let expandedCheckpoints = new Set();
let currentCheckpointIndex = 0;
let zoomLevel = 100;
const checkpointOrder = ['start', 'checkpoint1', 'checkpoint2', 'checkpoint3', 'checkpoint4', 'checkpoint5', 'checkpoint6a', 'checkpoint6b', 'continuous'];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createPulsingArrows();
  setupEventListeners();
  updateNavigationState();
  window.addEventListener('resize', () => {
    createPulsingArrows();
  });
});

// Create Pulsing Arrows between checkpoints
function createPulsingArrows() {
  const container = document.getElementById('arrowsContainer');
  if (!container) return;
  
  // Clear existing arrows
  container.innerHTML = '';

  if (currentView === 'vertical') return;

  // Helper function to get node center position
  const getNodeCenter = (checkpointId) => {
    const node = document.querySelector(`[data-checkpoint="${checkpointId}"]`);
    if (!node) return null;
    const rect = node.getBoundingClientRect();
    const containerRect = document.querySelector('.roadmap-nodes').getBoundingClientRect();
    return {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2
    };
  };

  // Arrow configuration with proper spacing
  const arrows = [
    { from: 'start', to: 'checkpoint1', symbol: '→', offsetY: 130 },
    { from: 'checkpoint1', to: 'checkpoint2', symbol: '→', offsetY: 130 },
    { from: 'checkpoint2', to: 'checkpoint3', symbol: '→', offsetY: 130 },
    { from: 'checkpoint3', to: 'checkpoint4', symbol: '→', offsetY: 130 },
    { from: 'checkpoint4', to: 'checkpoint5', symbol: '→', offsetY: 130 },
    { from: 'checkpoint5', to: 'checkpoint6a', symbol: '↓', offsetY: 0 },
    { from: 'checkpoint6a', to: 'checkpoint6b', symbol: '→', offsetY: 380 },
    { from: 'checkpoint6b', to: 'continuous', symbol: '→', offsetY: 380 }
  ];

  // Create each arrow with proper positioning
  arrows.forEach(arrowConfig => {
    const fromPos = getNodeCenter(arrowConfig.from);
    const toPos = getNodeCenter(arrowConfig.to);
    
    if (fromPos && toPos) {
      const arrow = document.createElement('div');
      arrow.className = 'pulse-arrow';
      
      // Calculate midpoint position with offsets
      let midX = (fromPos.x + toPos.x) / 2;
      let midY = (fromPos.y + toPos.y) / 2;
      
      // Apply offsets to prevent overlap
      if (arrowConfig.offsetX) {
        midX += arrowConfig.offsetX;
      }
      if (arrowConfig.offsetY) {
        midY += arrowConfig.offsetY;
      }
      
      arrow.style.left = `${midX}px`;
      arrow.style.top = `${midY}px`;
      
      const symbol = document.createElement('span');
      symbol.className = 'pulse-arrow-symbol';
      symbol.textContent = arrowConfig.symbol;
      
      arrow.appendChild(symbol);
      container.appendChild(arrow);
    }
  });
}

// Setup Event Listeners
function setupEventListeners() {

  // Expand/Collapse All
  const expandAllBtn = document.getElementById('expandAllBtn');
  const collapseAllBtn = document.getElementById('collapseAllBtn');
  
  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', expandAll);
  }
  
  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', collapseAll);
  }

  // Checkpoint expand buttons
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const checkpoint = e.target.closest('.checkpoint-node').dataset.checkpoint;
      toggleCheckpointExpansion(checkpoint);
    });
  });

  // Checkpoint nodes click
  document.querySelectorAll('.checkpoint-node').forEach(node => {
    node.addEventListener('click', (e) => {
      if (!e.target.classList.contains('expand-btn')) {
        const checkpoint = node.dataset.checkpoint;
        if (lastOpenedCheckpoint === checkpoint) {
          closePanel();
          lastOpenedCheckpoint = null;
        } else {
          showCheckpointModal(checkpoint);
          lastOpenedCheckpoint = checkpoint;
        }
      }
    });
  });

  // Panel close
  const panelClose = document.getElementById('panelClose');
  const panelOverlay = document.getElementById('panelOverlay');
  
  if (panelClose) {
    panelClose.addEventListener('click', closePanel);
  }
  
  if (panelOverlay) {
    panelOverlay.addEventListener('click', closePanel);
  }

  // Navigation
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateCheckpoint(-1));
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateCheckpoint(1));
  }

  // Zoom controls
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => adjustZoom(10));
  }
  
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => adjustZoom(-10));
  }
}



// Expand All Checkpoints
function expandAll() {
  document.querySelectorAll('.checkpoint-node').forEach(node => {
    const checkpoint = node.dataset.checkpoint;
    if (roadmapData.checkpoints[checkpoint]?.features) {
      if (!expandedCheckpoints.has(checkpoint)) {
        expandCheckpoint(checkpoint, node);
      }
    }
  });
}

// Collapse All Checkpoints
function collapseAll() {
  document.querySelectorAll('.feature-cards').forEach(cards => {
    cards.classList.remove('active');
    setTimeout(() => cards.remove(), 300);
  });
  expandedCheckpoints.clear();
}



// Toggle Checkpoint Expansion
function toggleCheckpointExpansion(checkpointId) {
  const node = document.querySelector(`[data-checkpoint="${checkpointId}"]`);
  const existingCards = node.querySelector('.feature-cards');
  
  if (existingCards) {
    existingCards.classList.remove('active');
    setTimeout(() => existingCards.remove(), 300);
    expandedCheckpoints.delete(checkpointId);
    return;
  }
  
  expandCheckpoint(checkpointId, node);
}

// Expand a single checkpoint
function expandCheckpoint(checkpointId, node) {
  if (!node) {
    node = document.querySelector(`[data-checkpoint="${checkpointId}"]`);
  }
  
  if (!node) return;
  
  const checkpoint = roadmapData.checkpoints[checkpointId];
  if (!checkpoint.features) return;
  
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'feature-cards';
  
  Object.keys(checkpoint.features).forEach(category => {
    const section = document.createElement('div');
    section.className = 'feature-section';
    
    const title = document.createElement('div');
    title.className = 'feature-section-title';
    title.textContent = category.replace(/_/g, ' ').toUpperCase();
    section.appendChild(title);
    
    const list = document.createElement('div');
    list.className = 'feature-list';
    
    checkpoint.features[category].forEach(feature => {
      const item = document.createElement('div');
      item.className = 'feature-item';
      
      // Determine layer based on category
      const layerClass = getLayerClass(category);
      const layerName = getLayerName(category);
      if (layerClass) item.classList.add(`layer-${layerClass}`);
      if (layerName) item.dataset.layer = layerName;
      
      item.textContent = feature;
      item.addEventListener('click', () => showFeatureDetail(feature, checkpoint));
      list.appendChild(item);
    });
    
    section.appendChild(list);
    cardsContainer.appendChild(section);
  });
  
  // Add technologies
  if (checkpoint.technologies) {
    const techSection = document.createElement('div');
    techSection.className = 'tech-badges';
    
    checkpoint.technologies.forEach(tech => {
      const badge = document.createElement('span');
      badge.className = 'tech-badge';
      badge.textContent = tech;
      techSection.appendChild(badge);
    });
    
    cardsContainer.appendChild(techSection);
  }
  
  node.appendChild(cardsContainer);
  setTimeout(() => {
    cardsContainer.classList.add('active');
  }, 10);
  expandedCheckpoints.add(checkpointId);
}

// Get Layer Class
function getLayerClass(category) {
  const mapping = {
    frontend: 'frontend',
    backend: 'backend',
    ai_suggestions: 'ai',
    impact_analytics: 'frontend',
    education_hub: 'frontend',
    events_geolocation: 'maps',
    map_advanced: 'maps',
    community: 'social',
    gamification: 'social',
    environmental_data: 'backend',
    verification: 'backend',
    notifications: 'backend',
    organizational: 'backend',
    b2b_integration: 'backend',
    scalability: 'backend',
    mobile_app: 'frontend',
    global_expansion: 'backend',
    social_features: 'social',
    performance: 'backend',
    leaderboards: 'social',
    impact_tracking: 'backend'
  };
  return mapping[category] || null;
}

// Get Layer Name
function getLayerName(category) {
  const mapping = {
    frontend: 'Frontend',
    backend: 'Backend',
    ai_suggestions: 'AI & ML',
    impact_analytics: 'Frontend',
    education_hub: 'Frontend',
    events_geolocation: 'Maps',
    map_advanced: 'Maps',
    community: 'Social',
    gamification: 'Social',
    environmental_data: 'Backend',
    verification: 'Backend',
    notifications: 'Backend',
    organizational: 'Backend',
    b2b_integration: 'Backend',
    scalability: 'Backend',
    mobile_app: 'Frontend',
    global_expansion: 'Backend',
    social_features: 'Social',
    performance: 'Backend',
    leaderboards: 'Social',
    impact_tracking: 'Backend'
  };
  return mapping[category] || 'Backend';
}

// Show Checkpoint Panel
function showCheckpointModal(checkpointId) {
  const checkpoint = roadmapData.checkpoints[checkpointId];
  const panel = document.getElementById('detailsPanel');
  const panelTitle = document.getElementById('panelTitle');
  const panelBody = document.getElementById('panelBody');
  const panelOverlay = document.getElementById('panelOverlay');
  
  if (!panel || !panelBody) return;
  
  panelTitle.textContent = checkpoint.title;
  
  let html = `
    <h2 style="font-size: 28px; margin-bottom: 16px; color: var(--color-primary);">${checkpoint.title}</h2>
    <p style="font-size: 16px; color: var(--color-text-secondary); margin-bottom: 24px;">${checkpoint.description}</p>
  `;
  
  if (checkpoint.phase) {
    html += `<div style="display: inline-block; padding: 8px 16px; background: var(--color-bg-1); border-radius: 20px; margin-bottom: 24px; font-weight: 600; color: var(--color-primary);">${checkpoint.phase}</div>`;
  }
  
  if (checkpoint.features) {
    Object.keys(checkpoint.features).forEach(category => {
      html += `
        <h3 style="font-size: 18px; margin: 24px 0 12px; color: var(--color-text); text-transform: uppercase; letter-spacing: 0.5px;">${category.replace('_', ' ')}</h3>
        <ul style="list-style: none; padding-left: 0;">
      `;
      
      checkpoint.features[category].forEach(feature => {
        html += `<li style="padding: 12px; background: var(--color-bg-2); margin-bottom: 8px; border-radius: 8px; border-left: 3px solid var(--color-primary);">• ${feature}</li>`;
      });
      
      html += '</ul>';
    });
  }
  
  if (checkpoint.items) {
    html += '<ul style="list-style: none; padding-left: 0;">';
    checkpoint.items.forEach(item => {
      html += `<li style="padding: 10px; background: var(--color-bg-2); margin-bottom: 6px; border-radius: 6px; border-left: 3px solid var(--color-primary); font-size: 13px; line-height: 1.4;">• ${item}</li>`;
    });
    html += '</ul>';
  }
  
  if (checkpoint.technologies) {
    html += '<div style="margin-top: 24px;"><strong>Technologies:</strong><div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">';
    checkpoint.technologies.forEach(tech => {
      html += `<span style="padding: 6px 12px; background: var(--color-bg-5); border-radius: 16px; font-size: 12px; font-weight: 600;">${tech}</span>`;
    });
    html += '</div></div>';
  }
  
  if (checkpoint.complexity) {
    html += `<div style="margin-top: 24px; padding: 16px; background: var(--color-bg-3); border-radius: 8px; text-align: center; font-weight: 600;">Complexity: <span style="color: var(--color-primary);">${checkpoint.complexity}</span></div>`;
  }
  
  panelBody.innerHTML = html;
  panel.classList.add('active');
  panelOverlay.classList.add('active');
  
}

// Show Feature Detail
function showFeatureDetail(feature, checkpoint) {
  showCheckpointModal(checkpoint.title.toLowerCase().replace(/ /g, ''));
}

// Close Panel
function closePanel() {
  const panel = document.getElementById('detailsPanel');
  const panelOverlay = document.getElementById('panelOverlay');
  
  if (panel) panel.classList.remove('active');
  if (panelOverlay) panelOverlay.classList.remove('active');
}

// Close panel when clicking on a checkpoint that's already showing
let lastOpenedCheckpoint = null;

// Navigate Checkpoints
function navigateCheckpoint(direction) {
  currentCheckpointIndex += direction;
  currentCheckpointIndex = Math.max(0, Math.min(currentCheckpointIndex, checkpointOrder.length - 1));
  
  const checkpointId = checkpointOrder[currentCheckpointIndex];
  const node = document.querySelector(`[data-checkpoint="${checkpointId}"]`);
  
  if (node) {
    node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    
    // Highlight the node
    document.querySelectorAll('.checkpoint-node').forEach(n => n.style.filter = '');
    node.style.filter = 'drop-shadow(0 0 20px var(--color-primary))';
    
    setTimeout(() => {
      node.style.filter = '';
    }, 2000);
  }
  
  updateNavigationState();
}

// Update Navigation State
function updateNavigationState() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentEl = document.getElementById('currentCheckpoint');
  const totalEl = document.getElementById('totalCheckpoints');
  
  if (prevBtn) prevBtn.disabled = currentCheckpointIndex === 0;
  if (nextBtn) nextBtn.disabled = currentCheckpointIndex >= checkpointOrder.length - 1;
  if (currentEl) currentEl.textContent = currentCheckpointIndex + 1;
  if (totalEl) totalEl.textContent = checkpointOrder.length;
}

// Adjust Zoom
function adjustZoom(delta) {
  zoomLevel = Math.max(50, Math.min(150, zoomLevel + delta));
  
  const roadmapNodes = document.getElementById('roadmapNodes');
  const zoomLevelEl = document.getElementById('zoomLevel');
  
  if (roadmapNodes) {
    roadmapNodes.style.transform = `scale(${zoomLevel / 100})`;
    roadmapNodes.style.transformOrigin = 'top left';
  }
  
  if (zoomLevelEl) {
    zoomLevelEl.textContent = `${zoomLevel}%`;
  }
}