import * as React from 'react';
import styles from './MyTasks.module.scss';
import type { IMyTasksProps } from './IMyTasksProps';

const MyTasks: React.FC<IMyTasksProps> = () => {
  const [activeNav, setActiveNav] = React.useState<string>('myTasks');
  const [activeTab, setActiveTab] = React.useState<string>('closed');
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);
  const [agentFilter, setAgentFilter] = React.useState<string>('');
  const [keySearch, setKeySearch] = React.useState<string>('');

  const toggleSection = (section: string): void => {
    if (expandedSections.indexOf(section) !== -1) {
      setExpandedSections(expandedSections.filter((s: string) => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const topNavItems = [
    {
      id: 'myTasks',
      label: 'My Tasks',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-10v2h14V7H7z"/>
        </svg>
      ),
    },
    {
      id: 'inspectionLogs',
      label: 'Inspection Logs',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
    },
    {
      id: 'probIdentifications',
      label: 'Prob. Identifications',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
      ),
    },
    {
      id: 'ncmrs',
      label: 'NCMRs',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
        </svg>
      ),
    },
    {
      id: 'qsProcessManage',
      label: 'QS & Process Manage',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      ),
    },
  ];

  const expandableSections = [
    {
      id: 'masterData',
      label: 'Master Data',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      children: ['Common Data', 'Admin Data', 'BU Data', 'System Data'],
    },
    {
      id: 'kpiRawDatabase',
      label: 'KPI Raw DataBase',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.3.85-3.58 1.55-6 1.55s-4.7-.7-6-1.55V9.64C7.61 10.48 9.72 11 12 11s4.39-.52 6-1.36v2.81zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2 6 1.5 6 2-2.13 2-6 2z"/>
        </svg>
      ),
      children: ['BU Receipts', 'CMAS Shipments', 'Scorecard Data'],
    },
    {
      id: 'kpiReports',
      label: 'KPI Reports',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/>
        </svg>
      ),
      children: ['Quality Report', 'Supply Chain Report', 'Vendor Scorecard', 'KPI Management'],
    },
    {
      id: 'search',
      label: 'Search',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      children: ['Inspection Logs', 'Problem Identifications', 'NCMRs'],
    },
  ];

  const renderMyTasksContent = (): JSX.Element => (
    <div className={styles.contentArea}>
      <div className={styles.contentHeader}>
        <div className={styles.contentHeaderLeft}>
          <span className={styles.contentTitle}>My Tasks</span>
          <span className={styles.headerDivider}>|</span>
          <button
            className={`${styles.tabBtn} ${activeTab === 'open' ? styles.tabBtnOutlined : styles.tabBtnOutlined}`}
            onClick={() => setActiveTab('open')}
          >
            Open Tasks
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'closed' ? styles.tabBtnFilled : styles.tabBtnOutlined}`}
            onClick={() => setActiveTab('closed')}
          >
            Closed Tasks
          </button>
        </div>
        <div className={styles.contentHeaderRight}>
          <span className={styles.keyLabel}>key</span>
          <input
            type="text"
            className={styles.keyInput}
            value={keySearch}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeySearch(e.target.value)}
          />
          <button className={styles.searchIconBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="10" cy="10" r="7" stroke="#e53e3e" strokeWidth="2"/>
              <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.agentSettingsBtn}>Agent Settings</button>
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Last Date:</span>
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Agent:</span>
          <select
            className={styles.filterSelect}
            value={agentFilter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAgentFilter(e.target.value)}
          >
            <option value="" />
          </select>
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Status: turn-off</span>
        </div>
        <button className={styles.applyBtn}>Apply</button>
      </div>

      <div className={styles.taskListArea} />
    </div>
  );

  return (
    <div className={styles.appShell}>
      {/* Top Header */}
      <div className={styles.appHeader}>
        <div className={styles.logoBlock}>
          <svg className={styles.logoGear} viewBox="0 0 48 48" width="42" height="42">
            <circle cx="24" cy="24" r="9" fill="#e07020"/>
            <circle cx="24" cy="24" r="5" fill="#fff"/>
            <rect x="22.5" y="5" width="3" height="8" rx="1.5" fill="#e07020"/>
            <rect x="22.5" y="35" width="3" height="8" rx="1.5" fill="#e07020"/>
            <rect x="5" y="22.5" width="8" height="3" rx="1.5" fill="#e07020"/>
            <rect x="35" y="22.5" width="8" height="3" rx="1.5" fill="#e07020"/>
            <rect x="10.1" y="10.1" width="8" height="3" rx="1.5" transform="rotate(45 10.1 10.1)" fill="#e07020"/>
            <rect x="32.1" y="34.9" width="8" height="3" rx="1.5" transform="rotate(45 32.1 34.9)" fill="#e07020"/>
            <rect x="34.9" y="10.1" width="8" height="3" rx="1.5" transform="rotate(-45 34.9 10.1)" fill="#e07020"/>
            <rect x="10.1" y="34.9" width="8" height="3" rx="1.5" transform="rotate(-45 10.1 34.9)" fill="#e07020"/>
          </svg>
          <div className={styles.logoText}>
            <div className={styles.logoName}>
              <span className={styles.logoCentro}>CENTRO</span>
              <span className={styles.logoMotion}>MOTION</span>
              <sup className={styles.logoTm}>®</sup>
            </div>
            <div className={styles.logoTagline}>Advancing Actuation and Control Solutions</div>
          </div>
        </div>

        <div className={styles.headerTitle}>
          Supplier Quality &amp; Performance Management System
        </div>

        <div className={styles.headerActions}>
          <span className={styles.headerActionBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            SHARE
          </span>
          <span className={styles.headerActionBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            FOLLOW
          </span>
          <span className={styles.headerActionBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.headerAccentLine} />

      <div className={styles.bodyLayout}>
        {/* Left Navigation */}
        <nav className={styles.leftNav}>
          {topNavItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.navItem} ${activeNav === item.id ? styles.navItemActive : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </div>
          ))}

          {expandableSections.map((section) => (
            <div key={section.id}>
              <div
                className={`${styles.navItem} ${styles.navItemExpandable}`}
                onClick={() => toggleSection(section.id)}
              >
                <span className={styles.navIcon}>{section.icon}</span>
                <span className={styles.navLabel}>{section.label}</span>
                <span className={styles.navChevron}>
                  {expandedSections.indexOf(section.id) !== -1 ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                  )}
                </span>
              </div>
              {expandedSections.indexOf(section.id) !== -1 && (
                <div className={styles.navSubItems}>
                  {section.children.map((child: string) => (
                    <div
                      key={child}
                      className={`${styles.navSubItem} ${activeNav === `${section.id}_${child}` ? styles.navSubItemActive : ''}`}
                      onClick={() => setActiveNav(`${section.id}_${child}`)}
                    >
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className={styles.navItem}>
            <span className={styles.navIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
            </span>
            <span className={styles.navLabel}>Help</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {activeNav === 'myTasks' && renderMyTasksContent()}
        </main>
      </div>
    </div>
  );
};

export default MyTasks;
