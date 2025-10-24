/**
 * Custom parser preset for @untile/commitlint-config.
 *
 * Parses commit headers with optional issue references.
 *
 * Format: [OPTIONAL-REFERENCE] Verb rest of message
 *
 * Examples:
 * - "Add new feature"
 * - "[PROJ-123] Fix authentication bug"
 * - "[notion-456] Update documentation"
 * - "[bug-1] Remove deprecated code"
 * - "[feature/auth] Add authentication"
 * - "[#123] Fix issue"
 * - "[WIP] Add new component"
 */

module.exports = {
  parserOpts: {
    // Map captured groups to semantic fields
    headerCorrespondence: ['ticket', 'type', 'subject'],

    // Pattern to parse: [OPTIONAL-REFERENCE] Type Subject
    // Captures:
    // 1. ticket: Optional reference in square brackets (any text)
    // 2. type: The verb/type (e.g., Add, Fix, Update)
    // 3. subject: Rest of the message
    headerPattern: /^(?:\[([^\]]+)\]\s+)?(\w+)\s+(.+)$/
  }
};
