<div id="content" class="column">
  <div id="messages-wrapper">
    <?php if ($messages): ?>
      <?php print $messages; ?>
    <?php endif; ?>
  </div>
  <?php print render($page['content']); ?>
</div>